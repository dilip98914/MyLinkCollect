function getSkill(a){if(","==a[a.length-1])return $(".skilllist").css({display:"none"}),!1;$(".skilllist").css({display:"block"});var l=a.split(","),e=l[l.length-1];$(".skilltext").each(function(){-1!=$(this).text().toLowerCase().search(e.toLowerCase())?$(this).css({display:"block"}):$(this).css({display:"none"})})}function setskilltext(a){var l;!a||(l=a.split(","))[l.length-1]&&$("#skills").val(a+",")}function setskill(a){var l=$("#skills").val(),e=[],e=l.split(",");console.log(e),l?(e[e.length-1]=a,$("#skills").val(e.toString())):$("#skills").val(a),$(".skilllist").css({display:"none"})}function searchfilter(){var a=$("#skills").val()?$("#skills").val():"",l=$("#locations").val()?$("#locations").val():"",e=$("#country").val()?$("#country").val():"",i=$("#experiencemin").val()?$("#experiencemin").val():"",t=$("#experiencemax").val()?$("#experiencemax").val():"",n=$("#gender").val()?$("#gender").val():"",s=$("#onsiteAvailability").val()?$("#onsiteAvailability").val():"",o=$("#availability").val()?$("#availability").val():"",c=$("#ratemin").val()?$("#ratemin").val():"",r=$("#ratemin").val()?$("#ratemax").val():"",v=$("#limit").val()?$("#limit").val():"",p=$("#baseurl").val()+"hire-freelancers?";p+="page=1",p+="&limit="+parseInt(v),a&&(a=(a=(a=a.toLowerCase()).replace(/,/g,"-")).replace(/\-$/,""),p+="&skills="+encodeURIComponent(a)),l&&(p+="&locations="+l.toLowerCase()),e&&(p+="&country="+e.toLowerCase()),i&&t&&(p+="&experiencemin="+i+"&experiencemax="+t),n&&(p+="&gender="+n),s&&(p+="&onsiteAvailability="+s.toLowerCase()),o&&(p+="&availability="+o.toLowerCase()),c&&r&&(p+="&ratemin="+c+"&ratemax="+r),window.location=p}function getlistbypage(a){var l=$("#skills").val()?$("#skills").val():"",e=$("#locations").val()?$("#locations").val():"",i=$("#country").val()?$("#country").val():"",t=$("#experiencemin").val()?$("#experiencemin").val():"",n=$("#experiencemax").val()?$("#experiencemax").val():"",s=$("#gender").val()?$("#gender").val():"",o=$("#onsiteAvailability").val()?$("#onsiteAvailability").val():"",c=$("#availability").val()?$("#availability").val():"",r=$("#ratemin").val()?$("#ratemin").val():"",v=$("#ratemin").val()?$("#ratemax").val():"",p=$("#limit").val()?$("#limit").val():"",y=$("#baseurl").val()+"hire-freelancers?";y+="page="+a,y+="&limit="+parseInt(p),l&&(y+="&skills="+encodeURIComponent(l)),e&&(y+="&locations="+e.toLowerCase()),i&&(y+="&country="+i.toLowerCase()),t&&n&&(y+="&experiencemin="+t+"&experiencemax="+n),s&&(y+="&gender="+s.toLowerCase()),o&&(y+="&onsiteAvailability="+o.toLowerCase()),c&&(y+="&availability="+c.toLowerCase()),r&&v&&(y+="&ratemin="+r+"&ratemax="+v),window.location=y}function get_city(a){var l={city_name:{$regex:"^"+a,$options:"i"}},e=$("#baseurl").val()+"notoken/city?filter=";$(".city_loader").css({display:"block"}),$.ajax({type:"GET",url:e+JSON.stringify(l),success:function(a){var l=a.data;if($(".city_loader").css({display:"none"}),0<l.length){html='<span class="closecity" onclick="closecity()"> <i class="fa fa-close"></i></span>';for(var e=0;e<l.length;e++)html+='<a id="'+l[e]._id+'" onclick=setvalue("'+l[e]._id+'",'+e+') rel="'+l[e].city_name+'"> ',html+=l[e].city_name+"("+l[e].country_id.country_name+")",html+="</a>";$(".locationlist").css({display:"block"}).html(html)}else $(".locationlist").css({display:"none"})},error:function(a){$(".city_loader").css({display:"none"})}})}function setvalue(a,l){var e=$("#"+a).attr("rel");$("#locations").val(e),$(".locationlist").css({display:"none"})}function closecity(){$(".locationlist").css({display:"none"})}function advancefilter(a){1==a?$(".sidebaradvance").css({display:"block"}):$(".sidebaradvance").css({display:"none"})}$("body").click(function(a){console.log(a.target.className),"form-control salectchanged"!=a.target.className&&$("#myDropdown").css({display:"none"})}),$(document).ready(function(){$("div").click(function(a){a.stopPropagation();var l=$(this).attr("class");"inner-group"==l&&"dropdown-content search-top skilllist"==l||(console.log(l),$(".dropdown-content").css({display:"none"}))}),$(".numtext").keyup(function(a){/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""))}),$(".salectchanged").keyup(function(a){this.value?$(".searchbutn").prop("disabled",!1):$(".searchbutn").prop("disabled",!0)})});