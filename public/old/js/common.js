//toggle textarea button disabled/enabled//////////////////////100 till done
$('#postTextArea,#replyTextArea').keyup(e => {
  const textbox = $(e.target);
  const value = textbox.val().trim();

  const isModal=textbox.parents('.modal').length==1;
  const submitButton = isModal ? $('#submitReplyButton') : $('#submitPostButton')
  if (!submitButton.length) return console.error('no submit button found!')
  if (value == '') {
    submitButton.prop('disabled', true)
    return
  }
  submitButton.prop('disabled', false)
})

//like button handler
$(document).on('click','.likeButton',(e)=>{
  const button=$(e.target);
  const postId=getPostIdFromElement(button)
  if(postId==undefined) return
  $.ajax({
    url:`/api/posts/${postId}/like`,
    type:'PUT',
    success:(postData)=>{

      button.find("span").text(postData.likes.length || "")
      if(postData.likes.includes(userLoggedIn._id)){
        button.addClass('active')
      }else{
        button.removeClass('active')
      }
    }
  })

})


//retweet button handler
$(document).on('click','.retweet',(e)=>{
  const button=$(e.target);
  const postId=getPostIdFromElement(button)
  if(postId==undefined) return
  $.ajax({
    url:`/api/posts/${postId}/retweet`,
    type:'POST',
    success:(postData)=>{
      button.find("span").text(postData.retweetUsers.length || "")
      if(postData.retweetUsers.includes(userLoggedIn._id)){
        button.addClass('active')
      }else{
        button.removeClass('active')
      }
    }
  })

})


function getPostIdFromElement(element){
  const isRoot=element.hasClass('post')
  const rootElement=isRoot==true ? element : element.closest('.post')
  const postId=rootElement.data().id;
  if(postId==undefined){
    console.error('post id is undefined!')
    return 
  }
  return postId 
}


//post button handler
$('#submitPostButton').click((e) => {
  const button = $(e.target)
  const textarea = $('#postTextArea')
  const data = {
    content: textarea.val()
  }
  $.post('/api/posts', data, (postData) => {
    const html = createPostHtml(postData)
    $('.postsContainer').prepend(html)
    textarea.val('')
    button.prop('disabled', true)
  })
})

function createPostHtml(data) {
  if(data==null) console.error('post object is null');
  const isRetweet=data.retweetData!==undefined;
  const retweetedBy=isRetweet ? data.postedBy.username:null;
  data=isRetweet ? data.retweetData:data;

  const postedBy=data.postedBy
  const displayName=postedBy.firstName+" "+postedBy.lastName
  const timestamp=timeDifference(new Date(),new Date(data.createdAt))
  const likeButtonActiveClass=data.likes.includes(userLoggedIn._id) ? 'active' : ''
  const retweetButtonActiveClass=data.retweetUsers.includes(userLoggedIn._id) ? 'active' : ''
  let retweetText='';
  if(isRetweet){
    retweetText=`
      <span>
        <i class='fas fa-retweet'></i>
        Retweeted by <a href="/profile/${retweetedBy}">@${retweetedBy}</a>
      </span>
    
    `
  } 

  return  `<div class='post' data-id='${data._id}'>
            <div class='postActionContainer'>
              ${retweetText}
            </div>

            <div class='mainContentContainer'>
              <div class='userImageContainer'>
                <img src='${postedBy.profilePic}'>
              </div>
              <div class='postContentContainer'>
                <div class='header'>
                  <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
                  <span class='username'>@${postedBy.username} </span>
                  <span class='date'>${timestamp} </span>
                </div>
                <div class='postBody'>
                  ${data.content}
                </div>
                <div class='postFooter'>
                  <div class='postButtonContainer'>
                      <button data-toggle='modal' data-target='#replyModal'>
                        <i class='far fa-comment'></i>
                      </button>            
                    </div>
                    <div class='postButtonContainer green'>
                      <button class='retweet ${retweetButtonActiveClass}'>
                        <i class='fas fa-retweet'></i>
                        <span>${data.retweetUsers.length || ""} </span>
                      </button>            
                    </div>

                    <div class='postButtonContainer red'>
                      <button class='likeButton ${likeButtonActiveClass}'>
                        <i class='far fa-heart'></i>
                        <span>${data.likes.length || ""} </span>
                      </button>            
                    </div>

                </div>
              </div>
            </div>
    </div>
        `
}

function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
      if(elapsed/1000<30) return "Just now";
       return Math.round(elapsed/1000) + ' seconds ago';   
  }

  else if (elapsed < msPerHour) {
       return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  }

  else if (elapsed < msPerDay ) {
       return Math.round(elapsed/msPerHour ) + ' hours ago';   
  }

  else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' days ago';   
  }

  else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' months ago';   
  }

  else {
      return Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}