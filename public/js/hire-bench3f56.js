function getSkill(e){if(","==e[e.length-1])return $(".skilllist").css({display:"none"}),!1;$(".skilllist").css({display:"block"});var l=e.split(","),a=l[l.length-1];$(".skilltext").each(function(){-1!=$(this).text().toLowerCase().search(a.toLowerCase())?$(this).css({display:"block"}):$(this).css({display:"none"})})}function setskilltext(e){var l;!e||(l=e.split(","))[l.length-1]&&$("#skills").val(e+",")}function setskill(e){var l=$("#skills").val(),a=[],a=l.split(",");console.log(a),l?(a[a.length-1]=e,$("#skills").val(a.toString())):$("#skills").val(e),$(".skilllist").css({display:"none"})}function searchfilter(){var e=parseInt($("#stypepage").val()),l=$("#fullUrls").val(),a=$("#skills").val()?$("#skills").val():"",i=$("#locations").val()?$("#locations").val():"",s=$("#country").val()?$("#country").val():"",t=$("#experiencemin").val()?$("#experiencemin").val():"",n=$("#experiencemax").val()?$("#experiencemax").val():"",o=$("#gender").val()?$("#gender").val():"",c=$("#onsiteAvailability").val()?$("#onsiteAvailability").val():"",r=$("#availability").val()?$("#availability").val():"",v=$("#ratemin").val()?$("#ratemin").val():"",p=$("#ratemin").val()?$("#ratemax").val():"",y=$("#baseurl").val(),d=y+"hire-bench-resources?";1==e&&(d="",d=y+"hire-bench-resources?"),2==e&&(d="",d=l+"?"),d+="&page=1",d+="&limit="+parseInt(15),a&&(a=(a=a.toLowerCase()).replace(/,/g,"-"),d+="&skills="+encodeURIComponent(a)),i&&(d+="&locations="+i.toLowerCase()),s&&(d+="&country="+s.toLowerCase()),t&&n&&(d+="&experiencemin="+t+"&experiencemax="+n),o&&(d+="&gender="+o),c&&(d+="&onsiteAvailability="+c.toLowerCase()),r&&(d+="&availability="+r.toLowerCase()),v&&p&&(d+="&ratemin="+v+"&ratemax="+p),window.location=d}function getlistbypage(e){var l=parseInt($("#stypepage").val()),a=$("#fullUrls").val(),i=$("#baseurl").val(),s=$("#skills").val()?$("#skills").val():"",t=$("#locations").val()?$("#locations").val():"",n=$("#country").val()?$("#country").val():"",o=$("#experiencemin").val()?$("#experiencemin").val():"",c=$("#experiencemax").val()?$("#experiencemax").val():"",r=$("#gender").val()?$("#gender").val():"",v=$("#onsiteAvailability").val()?$("#onsiteAvailability").val():"",p=$("#availability").val()?$("#availability").val():"",y=$("#ratemin").val()?$("#ratemin").val():"",d=$("#ratemin").val()?$("#ratemax").val():"",m=i+"hire-bench-resources?";1==l&&(m="",m=i+"hire-bench-resources?"),2==l&&(m="",m=a+"?"),m+="&page="+e,m+="&limit="+parseInt(15),s&&(m+="&skills="+encodeURIComponent(s)),t&&(m+="&locations="+t.toLowerCase()),n&&(m+="&country="+n.toLowerCase()),o&&c&&(m+="&experiencemin="+o+"&experiencemax="+c),r&&(m+="&gender="+r),v&&(m+="&onsiteAvailability="+v.toLowerCase()),p&&(m+="&availability="+p.toLowerCase()),y&&d&&(m+="&ratemin="+y+"&ratemax="+d),window.location=m}function get_city(e){var l={city_name:{$regex:"^"+e,$options:"i"}},a=$("#baseurl").val()+"notoken/city?filter=";$(".city_loader").css({display:"block"}),$.ajax({type:"GET",url:a+JSON.stringify(l),success:function(e){var l=e.data;if($(".city_loader").css({display:"none"}),0<l.length){html='<span class="closecity" onclick="closecity()"> <i class="fa fa-close"></i></span>';for(var a=0;a<l.length;a++)html+='<a id="'+l[a]._id+'" onclick=setvalue("'+l[a]._id+'",'+a+') rel="'+l[a].city_name+'"> ',html+=l[a].city_name+"("+l[a].country_id.country_name+")",html+="</a>";$(".locationlist").css({display:"block"}).html(html)}else $(".locationlist").css({display:"none"})},error:function(e){$(".city_loader").css({display:"none"})}})}function setvalue(e,l){var a=$("#"+e).attr("rel");$("#locations").val(a),$(".locationlist").css({display:"none"})}function closecity(){$(".locationlist").css({display:"none"})}function advancefilter(e){1==e?$(".sidebaradvance").css({display:"block"}):$(".sidebaradvance").css({display:"none"})}$("body").click(function(e){console.log(e.target.className),"form-control salectchanged"!=e.target.className&&$("#myDropdown").css({display:"none"})}),$(document).ready(function(){$("div").click(function(e){e.stopPropagation();var l=$(this).attr("class");"inner-group"==l&&"dropdown-content search-top skilllist"==l||(console.log(l),$(".dropdown-content").css({display:"none"}))})});