(function(e){function t(t){for(var n,i,o=t[0],c=t[1],d=t[2],l=0,p=[];l<o.length;l++)i=o[l],r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={gbviewassess:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;a.push([1,"chunk-vendors","chunk-common"]),s()})({1:function(e,t,s){e.exports=s("c9fa")},"244c":function(e,t,s){},6043:function(e,t,s){},7953:function(e,t,s){"use strict";var n=s("244c"),r=s.n(n);r.a},"79f5":function(e,t,s){},a02a:function(e,t,s){"use strict";var n=s("6043"),r=s.n(n);r.a},c9fa:function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.assessInfoLoaded?s("div",{staticClass:"gbmainview"},[s("h1",[e._v(e._s(e.$t("gradebook.detail_title")))]),s("h2",[e._v(e._s(e.aData.userfullname))]),s("h3",[e._v(e._s(e.aData.name))]),s("div",[e._v("\n      "+e._s(e.$t("gradebook.started"))+": "+e._s(e.startedString)),s("br"),e._v("\n      "+e._s(e.$t("gradebook.lastchange"))+": "+e._s(e.lastchangeString)+"\n      "),e.aData.timeontask>0?s("span",[s("br"),e._v("\n        "+e._s(e.$t("gradebook.time_onscreen"))+": "+e._s(e.totalTimeOnTask)+"\n      ")]):e._e()]),s("div",[e._v("\n      "+e._s(e.$t("gradebook.due"))+": "+e._s(e.aData.enddate_disp)+"\n        "),e.canEdit?s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:e.makeException}},[e._v("\n          "+e._s(e.exceptionActionLabel)+"\n        ")]):e._e(),e.aData.hasOwnProperty("original_enddate")?s("span",[s("br"),e._v("\n        "+e._s(e.$t("gradebook.originally_due"))+":\n          "+e._s(e.aData.original_enddate_disp)+".\n        "+e._s(e.extensionString)+"\n      ")]):e._e()]),s("div",[s("strong",[e._v("\n        "+e._s(e.$t("gradebook.gb_score"))+":\n        "),e.aData.scoreoverride&&e.canEdit?s("span",[s("input",{attrs:{id:"assessoverride",size:"4"},domProps:{value:e.aData.scoreoverride},on:{input:e.setScoreOverride}})]):s("span",[e._v("\n          "+e._s(e.aData.gbscore)+"\n        ")]),e._v(" / "+e._s(e.aData.points_possible)+"\n      ")]),e.aData.scoreoverride?s("span",[e._v("\n        ("+e._s(e.$t("gradebook.overridden"))+")\n      ")]):e.canEdit?s("span",[s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:function(t){e.showOverride=!e.showOverride}}},[e._v("\n          "+e._s(e.$t("gradebook.override"))+"\n        ")]),e.showOverride?s("span",[s("label",{attrs:{for:"assessoverride"}},[e._v(e._s(e.$t("gradebook.override")))]),e._v(":\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.assessOverride,expression:"assessOverride"}],attrs:{id:"assessoverride",size:"4"},domProps:{value:e.assessOverride},on:{input:function(t){t.target.composing||(e.assessOverride=t.target.value)}}})]):e._e()]):e._e(),e.canEdit?s("button",{attrs:{type:"button"},on:{click:function(t){return e.clearAttempts("all")}}},[e._v("\n        "+e._s(e.$t("gradebook.clear_all"))+"\n      ")]):e._e()]),e.canEdit?s("div",[s("a",{attrs:{href:e.viewAsStuUrl}},[e._v("\n        "+e._s(e.$t("gradebook.view_as_stu"))+"\n      ")]),e._v(" |\n      "),s("a",{attrs:{href:e.viewAsStuUrl+"#/print"}},[e._v("\n        "+e._s(e.$t("gradebook.print"))+"\n      ")])]):e._e(),0==e.aData.assess_versions.length?s("div",[e._v("\n      "+e._s(e.$t("gradebook.no_versions"))+"\n    ")]):s("div",{staticClass:"gbmainview"},[s("div",[e._v("\n        "+e._s(e.scoreCalc)+"\n        "),s("gb-assess-select",{attrs:{versions:e.aData.assess_versions,submitby:e.aData.submitby,haspractice:e.aData.has_practice,selected:e.curAver},on:{setversion:e.changeAssessVersion}}),e.isUnsubmitted?s("div",[e._v("\n          "+e._s(e.$t("gradebook.unsubmitted"))+".\n          "),s("button",{attrs:{type:"button"},on:{click:e.submitVersion}},[e._v("\n            "+e._s(e.$t("closed.submit_now"))+"\n          ")]),!e.canEdit&&e.aData.can_use_latepass?s("button",{attrs:{type:"button"},on:{click:e.redeemLatePass}},[e._v("\n            "+e._s(e.$t("lti.use_latepass"))+"\n          ")]):e._e()]):e._e()],1),e.canEdit?s("div",[s("button",{attrs:{type:"button"},on:{click:function(t){e.hidePerfect=!e.hidePerfect}}},[e._v("\n          "+e._s(e.hidePerfectLabel)+"\n        ")]),s("button",{attrs:{type:"button"},on:{click:function(t){e.hideCorrect=!e.hideCorrect}}},[e._v("\n          "+e._s(e.hideCorrectLabel)+"\n        ")]),s("button",{attrs:{type:"button"},on:{click:function(t){e.hideUnanswered=!e.hideUnanswered}}},[e._v("\n          "+e._s(e.hideUnansweredLabel)+"\n        ")]),s("button",{attrs:{type:"button"},on:{click:e.showAllAns}},[e._v("\n          "+e._s(e.$t("gradebook.show_all_ans"))+"\n        ")]),e.isByQuestion?e._e():s("button",{attrs:{type:"button"},on:{click:function(t){return e.clearAttempts("attempt")}}},[e._v("\n          "+e._s(e.$t("gradebook.clear_attempt"))+"\n        ")])]):e._e(),s("div",e._l(e.curQuestions,function(t,n){return s("div",{key:n,staticClass:"bigquestionwrap"},[s("div",{staticClass:"headerpane"},[s("strong",[e._v("\n              "+e._s(e.$tc("question_n",n+1))+".\n            ")]),"by_question"===e.aData.submitby?s("gb-question-select",{staticClass:"med-left",attrs:{versions:t,selected:e.curQver[n],qn:n},on:{setversion:e.changeQuestionVersion}}):s("span",[e._v("\n              "+e._s(e.$t("gradebook.score"))+":\n              "),s("strong",[e._v("\n                "+e._s(t[e.curQver[n]].score)+"/"+e._s(t[e.curQver[n]].points_possible)+"\n              ")])])],1),s("div",{staticClass:"scrollpane"},[s("gb-question",{directives:[{name:"show",rawName:"v-show",value:e.showQuestion[n],expression:"showQuestion[qn]"}],staticClass:"questionpane",attrs:{qdata:t[e.curQver[n]],qn:n}})],1),s("gb-score-details",{attrs:{showfull:e.showQuestion[n],canedit:e.canEdit,qdata:t[e.curQver[n]],qn:n}})],1)}),0),s("div",[e._v("\n        "+e._s(e.$t("gradebook.general_feedback"))+":\n        "),e.canEdit&&!e.useEditor?s("textarea",{staticClass:"fbbox",attrs:{rows:"2",cols:"60"},domProps:{value:e.assessFeedback},on:{input:e.updateFeedback}}):e.canEdit?s("div",{staticClass:"fbbox",attrs:{rows:"2"},domProps:{innerHTML:e._s(e.assessFeedback)},on:{input:e.updateFeedback}}):s("div",{domProps:{innerHTML:e._s(e.assessFeedback)}})]),s("div",[e.canEdit?s("button",{staticClass:"primary",attrs:{type:"button"},on:{click:e.submitChanges}},[e._v("\n          "+e._s(e.$t("gradebook.save"))+"\n        ")]):e._e(),s("button",{staticClass:"secondary",attrs:{type:"button"},on:{click:e.exit}},[e._v("\n          "+e._s(e.$t("gradebook.return"))+"\n        ")])]),s("div",{staticClass:"floatrightbutton"},[""!==e.savedMsg?s("div",{staticClass:"noticetext"},[e._v("\n          "+e._s(e.savedMsg)+"\n        ")]):e._e(),e.canEdit?s("button",{staticClass:"primary",attrs:{type:"button"},on:{click:e.submitChanges}},[e._v("\n          "+e._s(e.$t("gradebook.save"))+"\n        ")]):e._e()]),e.showCategories?s("summary-categories",{attrs:{data:e.curQuestionVers}}):e._e(),s("gb-clear-attempts"),s("div",{staticStyle:{"margin-bottom":"100px"}})],1)]):s("div",[e._v("\n    "+e._s(e.$t("loading"))+"\n  ")])])},a=[],i=(s("386d"),s("a481"),s("3b2b"),s("a4bb")),o=s.n(i),c=(s("c5f6"),s("28a5"),s("f499")),d=s.n(c),u=s("5176"),l=s.n(u),p=n["a"].observable({assessInfo:null,APIbase:null,aid:null,cid:null,uid:null,stu:0,queryString:"",exitUrl:"",inTransit:!1,saving:"",errorMsg:null,curAver:0,ispractice:!1,curQver:[],orig_submitby:null,scoreOverrides:{},feedbacks:{},clearAttempts:{show:!1,type:"",qn:0}}),h={loadGbAssessData:function(e){var t=this;null===p.assessInfo&&window.gbAssessData?(p.assessInfo=window.gbAssessData,"undefined"!==typeof e&&e()):(p.inTransit=!0,p.errorMsg=null,window.$.ajax({url:p.APIbase+"gbloadassess.php"+p.queryString,dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(s){s.hasOwnProperty("error")?t.handleError(s.error):(p.assessInfo=s,p.curAver=s.scored_version,t.setQverAsScored(s.scored_version),"undefined"!==typeof e&&e())}).fail(function(e,s,n){t.handleError("parsererror"===s?"parseerror":"noserver")}).always(function(e){p.inTransit=!1}))},loadGbAssessVersion:function(e,t){var s=this,n=p.queryString+"&ver="+e+"&practice="+(t?1:0);p.inTransit=!0,p.errorMsg=null,window.$.ajax({url:p.APIbase+"gbloadassessver.php"+n,dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(n){n.hasOwnProperty("error")?s.handleError(n.error):(t&&(e=p.assessInfo.assess_versions.length-1),p.assessInfo.assess_versions[e]=n,p.curAver=e,s.setQverAsScored(e),p.ispractice=t,t?(null===p.orig_submitby&&(p.orig_submitby=p.assessInfo.submitby),p.assessInfo.submitby="by_question"):null!==p.orig_submitby&&(p.assessInfo.submitby=p.orig_submitby))}).fail(function(e,t,n){s.handleError("parsererror"===t?"parseerror":"noserver")}).always(function(e){p.inTransit=!1})},loadGbQuestionVersion:function(e,t){var s=this,r=p.queryString+"&ver="+t+"&qn="+e;r+="&practice="+(p.ispractice?1:0),null===p.assessInfo.assess_versions[p.curAver].questions[e][t].html?(p.inTransit=!0,p.errorMsg=null,window.$.ajax({url:p.APIbase+"gbloadquestionver.php"+r,dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(r){r.hasOwnProperty("error")?s.handleError(r.error):(p.assessInfo.assess_versions[p.curAver].questions[e][t]=l()(p.assessInfo.assess_versions[p.curAver].questions[e][t],r),n["a"].set(p.curQver,e,t))}).fail(function(e,t,n){s.handleError("parsererror"===t?"parseerror":"noserver")}).always(function(e){p.inTransit=!1})):n["a"].set(p.curQver,e,t)},saveChanges:function(){var e=this,t=p.queryString;p.inTransit=!0,p.saving="saving",p.errorMsg=null;var s=new FormData;s.append("scores",d()(p.scoreOverrides)),s.append("feedback",d()(p.feedbacks)),s.append("practice",p.ispractice?1:0),window.$.ajax({url:p.APIbase+"gbsave.php"+t,type:"POST",dataType:"json",data:s,processData:!1,contentType:!1,xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(t){if(t.hasOwnProperty("error"))e.handleError(t.error);else{for(var s in p.saving="saved",p.scoreOverrides)if("gen"!==s){var n=s.split(/-/),r=p.assessInfo.assess_versions[n[0]].questions[n[1]][n[2]];r.parts[n[3]]&&(r.parts[n[3]].score=Math.round(1e3*p.scoreOverrides[s]*r.parts[n[3]].points_possible)/1e3)}else p.assessInfo.gbscore=p.scoreOverrides[s],p.assessInfo.scoreoverride=p.scoreOverrides[s];p.assessInfo.gbscore=t.gbscore,p.assessInfo.scored_version=t.scored_version,p.scoreOverrides={},p.feedbacks={}}}).fail(function(e){p.saving="save_fail"}).always(function(e){p.inTransit=!1})},clearAttempt:function(e){var t=this,s={type:p.clearAttempts.type,keepver:e};"attempt"!==p.clearAttempts.type&&"qver"!==p.clearAttempts.type||(s.aver=p.curAver),"qver"===p.clearAttempts.type&&(s.qn=p.clearAttempts.qn,s.qver=p.curQver[s.qn]),window.$.ajax({url:p.APIbase+"gbclearattempt.php"+p.queryString,type:"POST",dataType:"json",data:s,xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(e){e.hasOwnProperty("error")?t.handleError(e.error):"all"===p.clearAttempts.type?window.location=p.exitUrl:(p.assessInfo=null,h.loadGbAssessData())}).fail(function(e){t.handleError("send_fail")}).always(function(e){p.inTransit=!1,p.clearAttempts.show=!1})},endAssess:function(){var e=this;p.inTransit=!0,p.errorMsg=null,window.$.ajax({url:p.APIbase+"endassess.php"+p.queryString,dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0}).done(function(t){t.hasOwnProperty("error")?e.handleError(t.error):(p.assessInfo=null,h.loadGbAssessData())}).fail(function(t,s,n){e.handleError("parsererror"===s?"parseerror":"noserver")}).always(function(e){p.inTransit=!1})},setQverAsScored:function(e){for(var t,s=p.assessInfo.assess_versions[e].questions,r=0;r<s.length;r++)for(t=0;t<s[r].length;t++)s[r][t].hasOwnProperty("scored")?n["a"].set(p.curQver,r,t):n["a"].set(p.curQver,r,s[r].length-1)},setScoreOverride:function(e,t,s){var n=p.curAver,r=p.curQver[e],a=p.assessInfo.assess_versions[n].questions[e][r],i=n+"-"+e+"-"+r+"-"+t;a.parts[t]&&(""===s||Math.abs(s-a.parts[t].rawscore)<.001)?delete p.scoreOverrides[i]:p.scoreOverrides[i]=Math.round(1e4*s)/1e4,p.saving=""},setFeedback:function(e,t){var s=p.curAver,n=s,r=!0;if(null===e)n+="-g",t===p.assessInfo.assess_versions[p.curAver].feedback&&(r=!1);else{var a=p.curQver[e];n+="-"+e+"-"+a,t===p.assessInfo.assess_versions[p.curAver].questions[e][a].feedback&&(r=!1)}r?p.feedbacks[n]=t:delete p.feedbacks[n],p.saving=""},handleError:function(e){p.errorMsg=e}},v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"questionwrap",attrs:{id:"questionwrap"+e.qn},domProps:{innerHTML:e._s(e.qdata.html)}})},b=[],f=(s("7514"),{name:"GbQuestion",props:["qdata","qn"],data:function(){return{rendered:!1}},methods:{renderInit:function(){if(!this.rendered){setTimeout(window.drawPics,100),window.rendermathnode(document.getElementById("questionwrap"+this.qn)),window.imathasAssess.init(this.qdata.jsparams,!0);var e='<svg viewBox="0 0 24 24" width="16" height="16" stroke="green" stroke-width="3" fill="none" role="img" aria-label="'+this.$t("icons.correct")+'">';e+='<polyline points="20 6 9 17 4 12"></polyline></svg>';var t='<svg viewBox="0 0 24 24" width="16" height="16" stroke="rgb(255,187,0)" stroke-width="3" fill="none" role="img" aria-label="'+this.$t("icons.partial")+'">';e+='<path d="M 5.3,10.6 9,14.2 18.5,4.6 21.4,7.4 9,19.8 2.7,13.5 z" /></svg>';var s='<svg viewBox="0 0 24 24" width="16" height="16" stroke="rgb(153,0,0)" stroke-width="3" fill="none" role="img" aria-label="'+this.$t("icons.incorrect")+'">';s+='<path d="M18 6 L6 18 M6 6 L18 18" /></svg>',window.$("#questionwrap"+this.qn).find("select.ansgrn").after(e),window.$("#questionwrap"+this.qn).find("select.ansyel").after(t),window.$("#questionwrap"+this.qn).find("select.ansred").after(s),window.$("#questionwrap"+this.qn).find("div.ansgrn,table.ansgrn").append(e),window.$("#questionwrap"+this.qn).find("div.ansyel,table.ansyel").append(t),window.$("#questionwrap"+this.qn).find("div.ansred,table.ansred").append(s),this.rendered=!0}}},mounted:function(){this.renderInit()},watch:{qdata:function(e,t){this.rendered=!1,this.$nextTick(this.renderInit)}}}),_=f,m=s("2877"),g=Object(m["a"])(_,v,b,!1,null,null,null),w=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("menu-button",{attrs:{id:"assess_select",options:e.navOptions,selected:e.selected,noarrow:1==e.navOptions.length,searchby:"ver"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.option;return[s("gb-assess-list-item",{attrs:{option:n,submitby:e.submitby}})]}}])})],1)},k=[],q=s("ad76"),$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("strong",[e._v(e._s(e.attemptNum)+".")]),e.option.score?s("span",[e._v("\n    "+e._s(e.$t("gradebook.score"))+":\n    "),s("strong",[e._v(e._s(e.score))]),e._v(".\n  ")]):e._e(),e.option.hasOwnProperty("status")?s("span",[e._v("\n    "+e._s(e.verStatus)+"\n  ")]):e._e()])},A=[],P={name:"GbAssessListItem",props:["option","submitby"],computed:{attemptNum:function(){return 3===this.option.status?this.$t("gradebook.practice_attempt"):"by_question"===this.submitby?this.$t("gradebook.scored_attempt"):this.$tc("gradebook.attempt_n",this.option.ver+1)},verStatus:function(){if(-1===this.option.status)return this.$t("gradebook.not_started");if(0===this.option.status)return this.$t("by_assessment"===this.submitby);if(1===this.option.status||2===this.option.status){var e="";return"by_question"===this.submitby?e+=this.$t("gradebook.lastchange"):e+=this.$t("gradebook.submitted"),e+=" "+this.option.lastchange_disp,e}return""},score:function(){return this.option.score+"/"+p.assessInfo["points_possible"]}}},O=P,x=Object(m["a"])(O,$,A,!1,null,null,null),C=x.exports,I={name:"GbAssessSelect",props:["versions","selected","submitby","haspractice"],components:{MenuButton:q["a"],GbAssessListItem:C},computed:{navOptions:function(){for(var e=this,t=[],s=function(s){t.push({ver:s,score:e.versions[s].score,status:e.versions[s].status,lastchange_disp:e.versions[s].lastchange_disp,onclick:function(){return e.$emit("setversion",s)}})},n=0;n<this.versions.length;n++)s(n);return t}},methods:{}},S=I,E=Object(m["a"])(S,y,k,!1,null,null,null),D=E.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{display:"inline-block"}},[s("menu-button",{attrs:{id:"qselect"+e.qn,options:e.navOptions,selected:e.selected,noarrow:1==e.navOptions.length,searchby:"ver"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.option;return[s("gb-question-list-item",{attrs:{option:n,total:e.navOptions.length}})]}}])})],1)},T=[],M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[e._v("\n  "+e._s(e.attemptNum)+".\n  "),e.option.hasOwnProperty("score")?s("span",[e._v("\n    "+e._s(e.$t("gradebook.score"))+": "),s("strong",[e._v(e._s(e.score))])]):e._e()])},j=[],G={name:"GbQuestionListItem",props:["option","total"],computed:{attemptNum:function(){return this.$tc("gradebook.version_n",this.option.ver+1)+(this.option.scored?"*":"")+"/"+this.total},score:function(){return this.option.score+"/"+this.option.ptsposs}}},L=G,U=Object(m["a"])(L,M,j,!1,null,null,null),F=U.exports,V={name:"GbQuestionSelect",props:["versions","selected","qn"],components:{MenuButton:q["a"],GbQuestionListItem:F},computed:{navOptions:function(){for(var e=this,t=[],s=function(s){var n={ver:s,ptsposs:e.versions[s].points_possible,onclick:function(){return e.$emit("setversion",e.qn,s)}};e.versions[s].hasOwnProperty("score")&&(n.score=e.versions[s].score,n.scored=s===e.selected),t.push(n)},n=0;n<this.versions.length;n++)s(n);return t}}},N=V,B=Object(m["a"])(N,Q,T,!1,null,null,null),H=B.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"scoredetails"},[e.canedit?s("menu-button",{staticClass:"floatright",attrs:{options:e.moreOptions,position:"right",nobutton:"true",noarrow:"true"},scopedSlots:e._u([{key:"button",fn:function(e){return[s("icons",{attrs:{name:"more",size:"medium"}})]}}])}):e._e(),s("div",[e._v("\n    "+e._s(e.$t("gradebook.score"))+":\n    "),e._l(e.partPoss,function(t,n){return s("span",{key:n},[e.canedit&&!e.isPractice?s("input",{directives:[{name:"model",rawName:"v-model",value:e.curScores[n],expression:"curScores[i]"}],attrs:{type:"text",size:"4",id:"sc"+e.qn+"-"+n},domProps:{value:e.curScores[n]},on:{input:[function(t){t.target.composing||e.$set(e.curScores,n,t.target.value)},function(t){return e.updateScore(n,t)}]}}):s("span",[e._v(e._s(e.curScores[n]))]),e._v("/"+e._s(t)+"\n      "),e.canedit&&!e.isPractice&&e.qdata.rubric>0?s("button",{staticClass:"plain nopad",on:{click:function(t){return e.showRubric(n)}}},[s("icons",{attrs:{name:"clipboard",alt:"icons.rubric",size:"small"}})],1):e._e()])}),e.canedit&&!e.isPractice?s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:e.allFull}},[e._v("\n      "+e._s(e.fullCreditLabel)+"\n    ")]):e._e(),e.canedit&&!e.isPractice&&!1===e.showfeedback?s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:function(t){e.showfeedback=!0}}},[e._v("\n      "+e._s(e.$t("gradebook.add_feedback"))+"\n    ")]):e._e()],2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showfeedback,expression:"showfeedback"}]},[e._v("\n    "+e._s(e.$t("gradebook.feedback"))+":"),s("br"),e.canedit&&!e.useEditor?s("textarea",{staticClass:"fbbox",attrs:{name:"fb"+e.qn,rows:"2",cols:"60"},domProps:{value:e.qdata.feedback},on:{input:e.updateFeedback}}):e.canedit?s("div",{staticClass:"fbbox",attrs:{rows:"2",id:"fb"+e.qn},domProps:{innerHTML:e._s(e.qdata.feedback)},on:{input:e.updateFeedback}}):s("div",{domProps:{innerHTML:e._s(e.qdata.feedback)}})]),e.showfull?s("div",[e.qdata.timeactive.total>0?s("span",[e._v("\n      "+e._s(e.$t("gradebook.time_on_version"))+":\n      "+e._s(e.timeSpent)+"\n    ")]):e._e(),e.maxTry>1?s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:function(t){e.showAllTries=!e.showAllTries}}},[e._v("\n      "+e._s(e.$t("gradebook.show_tries"))+"\n    ")]):e._e(),e.hasPenalties?s("button",{staticClass:"slim",attrs:{type:"button"},on:{click:function(t){e.showPenalties=!e.showPenalties}}},[e._v("\n      "+e._s(e.$t("gradebook.show_penalties"))+"\n    ")]):e._e()]):e._e(),e.showAllTries?s("gb-all-tries",{attrs:{tries:e.qdata.other_tries}}):e._e(),e.showPenalties?s("gb-penalties",{attrs:{parts:e.qdata.parts,submitby:e.submitby}}):e._e(),e.canedit&&e.showfull&&e.qHelps.length>0?s("div",[e._v("\n    "+e._s(e.$t("gradebook.had_help"))+":\n    "),e._l(e.qHelps,function(t,n){return s("a",{key:n,attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.title))])})],2):e._e()],1)},R=[],W=s("7618"),J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[s("strong",[e._v(e._s(e.$t("gradebook.all_tries")))])]),e._l(e.tries,function(t,n){return s("div",{key:n,staticClass:"med-below med-left"},[e.tries.length>1?s("div",[s("strong",[e._v(e._s(e.$t("gradebook.part_n",{n:n+1})))])]):e._e(),e._l(t,function(t,n){return s("div",{key:n},[e._v("\n      "+e._s(e.$t("gradebook.try_n",{n:n+1}))+": "+e._s(t)+"\n    ")])})],2)})],2)},Y=[],K={name:"GbAllTries",props:["tries"]},X=K,Z=Object(m["a"])(X,J,Y,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"qdetails"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.$t("qdetails.part")))]),s("th",[e._v(e._s(e.$t("penalties.applied")))])])]),s("tbody",e._l(e.parts,function(t,n){return s("tr",{key:n},[s("td",[e._v(e._s(n+1))]),s("td",[-1!=e.partHasPenalties.indexOf(n)?s("penalties-applied",{staticClass:"med-left",attrs:{part:t,submitby:e.submitby}}):e._e()],1)])}),0)])},se=[],ne=s("c428"),re={name:"GbPenalties",props:["parts","submitby"],components:{PenaltiesApplied:ne["a"]},computed:{partHasPenalties:function(){for(var e=[],t=0;t<this.parts.length;t++)this.parts[t].hasOwnProperty("penalties")&&this.parts[t].penalties.length>0&&e.push(t);return e}}},ae=re,ie=Object(m["a"])(ae,te,se,!1,null,null,null),oe=ie.exports,ce=s("f05b"),de={name:"GbScoreDetails",props:["qdata","qn","canedit","showfull"],components:{GbAllTries:ee,GbPenalties:oe,MenuButton:q["a"],Icons:ce["a"]},data:function(){return{curScores:!1,showfeedback:!1,showAllTries:!1,showPenalties:!1}},computed:{answeights:function(){if(this.qdata.answeights){var e=this.qdata.answeights.reduce(function(e,t){return e+t});return this.qdata.answeights.map(function(t){return t/e})}return[1]},partPoss:function(){for(var e=[],t=0;t<this.answeights.length;t++)e[t]=Math.round(1e3*this.qdata.points_possible*this.answeights[t])/1e3;return e},initScores:function(){for(var e=[],t=0;t<this.answeights.length;t++)if(this.qdata.scoreoverride&&"object"!==Object(W["a"])(this.qdata.scoreoverride)){var s=this.qdata.scoreoverride*this.answeights[t]*this.qdata.points_possible;s=Math.round(1e3*s)/1e3,e.push(s)}else this.qdata.scoreoverride&&this.qdata.scoreoverride.hasOwnProperty(t)?this.qdata.parts[t]&&this.qdata.parts[t].points_possible?e.push(Math.round(1e3*this.qdata.scoreoverride[t]*this.qdata.parts[t].points_possible)/1e3):e.push(Math.round(1e3*this.qdata.scoreoverride[t]*this.answeights[t]*this.qdata.points_possible)/1e3):0!==this.maxTry&&this.qdata.parts[t].hasOwnProperty("score")?e.push(this.qdata.parts[t].score):e.push("N/A");return e},fullCreditLabel:function(){return this.answeights.length>1?this.$t("gradebook.full_credit_parts"):this.$t("gradebook.full_credit")},timeSpent:function(){var e=Math.round(10*this.qdata.timeactive.total/60)/10+" "+this.$t("gradebook.minutes");return e},useEditor:function(){return"undefined"!==typeof window.tinyMCE},isPractice:function(){return p.ispractice},maxTry:function(){for(var e=0,t=0;t<this.qdata.parts.length;t++)this.qdata.parts[t]&&this.qdata.parts[t].try&&this.qdata.parts[t].try>e&&(e=this.qdata.parts[t].try);return e},questionEditUrl:function(){var e="id="+this.qdata.qsetid+"&cid="+p.cid;return e+="&aid="+p.aid+"&qid="+this.qdata.qid,p.APIbase+"../course/moddataset.php?"+e},questionErrorUrl:function(){if(p.assessInfo.qerror_cid){var e="0-"+this.qdata.qsetid+"-"+this.qdata.seed+"-reperr-"+p.assessInfo.ver,t="add=new&cid="+p.assessInfo.qerror_cid+"&quoteq="+e+"&to="+this.qdata.qowner+"&title=Problem%20with%20question%20id%20"+this.qdata.qsetid;return p.APIbase+"../msgs/msglist.php?"+t}return""},useInMsg:function(){var e=this.qn+"-"+this.qdata.qsetid+"-"+this.qdata.seed+"-"+p.aid+"-"+p.assessInfo.ver,t="add=new&cid="+p.assessInfo.qerror_cid+"&quoteq="+e+"&to="+p.uid;return p.APIbase+"../msgs/msglist.php?"+t},moreOptions:function(){var e=this,t=[{label:this.$t("gradebook.use_in_msg"),link:this.useInMsg},{label:this.$t("gradebook.view_edit")+" ID "+this.qdata.qsetid+" Seed "+this.qdata.seed,link:this.questionEditUrl},{label:this.$t("gradebook.msg_owner"),link:this.questionErrorUrl}];return this.isPractice||t.push({label:this.$t("gradebook.clear_qwork"),onclick:function(){return e.clearWork()}}),t},hasPenalties:function(){for(var e=0;e<this.qdata.parts.length;e++)if(this.qdata.parts[e].hasOwnProperty("penalties")&&this.qdata.parts[e].penalties.length>0)return!0;return!1},submitby:function(){return p.assessInfo.submitby}},methods:{updateScore:function(e,t){h.setScoreOverride(this.qn,e,this.curScores[e]/this.partPoss[e])},updateFeedback:function(e){var t;t=this.useEditor?window.tinymce.activeEditor.getContent():e.target.value,h.setFeedback(this.qn,t)},allFull:function(){for(var e=0;e<this.answeights.length;e++)this.$set(this.curScores,e,this.partPoss[e]),h.setScoreOverride(this.qn,e,this.curScores[e]/this.partPoss[e])},clearWork:function(){p.clearAttempts.type="qver",p.clearAttempts.qn=this.qn,p.clearAttempts.show=!0},initCurScores:function(){this.$set(this,"curScores",this.initScores),this.showfeedback=null!==this.qdata.feedback&&this.qdata.feedback.length>0,this.useEditor&&window.initeditor("divs","fbbox",null,!0)},qHelps:function(){if(this.qdata.jsparams){var e=this.qdata.jsparams.helps;for(var t in e)"video"===e[t].label?(e[t].icon="video",e[t].title=this.$t("helps.video")):"read"===e[t].label?(e[t].icon="file",e[t].title=this.$t("helps.read")):"ex"===e[t].label?(e[t].icon="file",e[t].title=this.$t("helps.written_Example")):(e[t].icon="file",e[t].title=e[t].label);return e}return[]},showRubric:function(e){window.imasrubrics||(window.imasrubrics=p.assessInfo["rubrics"]),this.showfeedback=!0,window.imasrubric_show(this.qdata.rubric,this.qdata.points_possible,"sc"+this.qn+"-"+e,"fb"+this.qn,this.qn,600)}},mounted:function(){this.initCurScores()},watch:{qdata:function(e,t){this.initCurScores()}}},ue=de,le=(s("dbe6"),Object(m["a"])(ue,z,R,!1,null,null,null)),pe=le.exports,he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showModal?s("div",{staticClass:"modalwrap",on:{keydown:function(t){return"keyCode"in t&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close(t)}}},[s("div",{staticClass:"modal",attrs:{role:"alertdialog","aria-modal":"true"}},["all"===e.showType?s("div",[s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.type,"0")},on:{change:function(t){e.type="0"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_completely_msg"))+"\n        ")])]),e.isByQuestion?s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.type,"1")},on:{change:function(t){e.type="1"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_all_work_msg"))+"\n        ")])]):e._e()]):"attempt"===e.showType?s("div",[s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.type,"0")},on:{change:function(t){e.type="0"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_attempt_regen_msg"))+"\n        ")])]),e.isLastAttempt?s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.type,"1")},on:{change:function(t){e.type="1"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_attempt_msg"))+"\n        ")])]):e._e()]):"qver"===e.showType?s("div",[e.isByQuestion?s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.type,"0")},on:{change:function(t){e.type="0"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_qver_regen_msg"))+"\n        ")])]):s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.type,"0")},on:{change:function(t){e.type="0"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_qver_regen_msg2"))+"\n        ")])]),s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.type,"1")},on:{change:function(t){e.type="1"}}}),e._v("\n          "+e._s(e.$t("gradebook.clear_qver_msg"))+"\n        ")])])]):e._e(),s("p",{staticClass:"noticetext"},[e._v("\n      "+e._s(e.$t("gradebook.clear_warning"))+"\n    ")]),s("div",{staticClass:"flexrow",staticStyle:{"justify-content":"space-between"}},[s("button",{staticClass:"primary",on:{click:e.close}},[e._v("\n        Cancel\n      ")]),s("button",{staticClass:"secondary",on:{click:e.doAction}},[e._v("\n        Continue\n      ")])])])]):e._e()},ve=[],be={name:"GbClearAttempts",data:function(){return{type:0}},computed:{showModal:function(){return p.clearAttempts.show},showType:function(){return p.clearAttempts.type},isByQuestion:function(){return"by_question"===p.assessInfo.submitby},isLastAttempt:function(){var e=p.assessInfo.assess_versions.length;return p.assessInfo.has_practice&&e--,p.curAver===e}},methods:{close:function(){p.clearAttempts.show=!1},doAction:function(){h.clearAttempt(this.type)}},updated:function(){p.clearAttempts.show&&window.$(".modal").find("input").focus()}},fe=be,_e=(s("7953"),Object(m["a"])(fe,he,ve,!1,null,null,null)),me=_e.exports,ge=s("4632"),we={components:{GbQuestion:w,GbAssessSelect:D,GbQuestionSelect:H,GbScoreDetails:pe,GbClearAttempts:me,SummaryCategories:ge["a"]},data:function(){return{showOverride:!1,assessOverride:"",hidePerfect:!1,hideCorrect:!1,hideUnanswered:!1}},computed:{assessInfoLoaded:function(){return null!==p.assessInfo},aData:function(){return p.assessInfo},canEdit:function(){return p.assessInfo["can_edit_scores"]},useEditor:function(){return"undefined"!==typeof window.tinyMCE},isByQuestion:function(){return"by_question"===this.aData.submitby},startedString:function(){return 0===this.aData.starttime?this.$t("gradebook.not_started"):this.aData.starttime_disp},lastchangeString:function(){return 0===this.aData.lastchange?this.$t("gradebook.not_submitted"):this.aData.lastchange_disp},totalTimeOnTask:function(){return Math.round(10*this.aData.timeontask/60)/10+" "+this.$t("gradebook.minutes")},extensionString:function(){return"latepass"===this.aData.extended_with.type?this.$tc("setlist.latepass_used",this.aData.extended_with.n):this.$t("setlist.extension")},curQuestions:function(){return this.aData.assess_versions[p.curAver].questions},curAver:function(){return p.curAver},curQver:function(){return p.curQver},curQuestionVers:function(){for(var e=[],t=0;t<this.curQuestions.length;t++)e[t]=this.curQuestions[t][this.curQver[t]];return e},showCategories:function(){var e=!1;for(var t in this.curQuestionVers)if(this.curQuestionVers[t].hasOwnProperty("category")&&""!==this.curQuestionVers[t].category&&null!==this.curQuestionVers[t].category){e=!0;break}var s=this.curQuestionVers[0].hasOwnProperty("score")&&!isNaN(Number(this.curQuestionVers[0].score));return e&&s},scoreCalc:function(){if("by_question"===this.aData.submitby)return this.$t("gradebook.best_on_question");if("best"===this.aData.keepscore){var e=this.$t("gradebook.keep_best");return"number"===typeof this.aData.gbscore&&(e+=" ("+this.$tc("gradebook.attempt_n",this.aData.scored_version+1)+")"),e}return"average"===this.aData.keepscore?this.$t("gradebook.keep_avg"):"last"===this.aData.keepscore?this.$t("gradebook.keep_last"):""},viewAsStuUrl:function(){return"index.php?cid="+p.cid+"&aid="+p.aid+"&uid="+p.uid},showQuestion:function(){for(var e={},t=0;t<this.curQuestions.length;t++){var s=this.curQuestions[t][this.curQver[t]],n=!0;this.hidePerfect&&Math.abs(s.score-s.points_possible)<.002?n=!1:this.hideCorrect&&Math.abs(s.rawscore-1)<.002?n=!1:this.hideUnanswered&&0===s.try&&(n=!1),e[t]=n}return e},hidePerfectLabel:function(){return this.hidePerfect?this.$t("gradebook.show_perfect"):this.$t("gradebook.hide_perfect")},hideCorrectLabel:function(){return this.hideCorrect?this.$t("gradebook.show_correct"):this.$t("gradebook.hide_correct")},hideUnansweredLabel:function(){return this.hideUnanswered?this.$t("gradebook.show_unans"):this.$t("gradebook.hide_unans")},exceptionActionLabel:function(){return this.aData.hasexception?this.$t("gradebook.edit_exception"):this.$t("gradebook.make_exception")},assessFeedback:function(){return this.aData.assess_versions[p.curAver].feedback||""},savedMsg:function(){return""===p.saving?"":this.$t("gradebook."+p.saving)},isUnsubmitted:function(){return"by_assessment"===this.aData.submitby&&0===this.aData.assess_versions[p.curAver].status},hasError:function(){return null!==p.errorMsg}},methods:{changeAssessVersion:function(e){(o()(p.scoreOverrides).length>0||o()(p.feedbacks).length>0)&&!confirm(this.$t("gradebook.unsaved_warn"))||e!==p.curAver&&(3===this.aData.assess_versions[e].status?h.loadGbAssessVersion(0,!0):h.loadGbAssessVersion(e,!1))},changeQuestionVersion:function(e,t){var s=!1,n=new RegExp("^"+p.curAver+"-"+e+"-");for(var r in p.scoreOverrides)n.test(r)&&(s=!0);for(var a in p.feedbacks)n.test(a)&&(s=!0);s&&!confirm(this.$t("gradebook.unsaved_warn"))||t!==p.curQver[e]&&h.loadGbQuestionVersion(e,t)},updateFeedback:function(e){var t;t=this.useEditor?window.tinymce.activeEditor.getContent():e.target.value,h.setFeedback(null,t)},setScoreOverride:function(e){this.assessOverride=e.target.value,p.saving=""},submitChanges:function(){this.showOverride&&""!==this.assessOverride?p.scoreOverrides["gen"]=this.assessOverride:this.aData.scoreoverride&&this.assessOverride!==this.aData.scoreoverride?p.scoreOverrides["gen"]=this.assessOverride:delete p.scoreOverrides["gen"],h.saveChanges()},exit:function(){window.location=p.exitUrl},setExitUrl:function(e){var t="";"isolate"===e?t="isolateassessgrade.php":"gisolate"===e?t="isolateassessbygroup.php":"stugrp"===e?t="managestugrps.php":"gisolate"===e?t="gb-testing.php":"gisolate"===e&&(t="gradebook.php");var s="?cid="+p.cid+"&aid="+p.aid+"&stu="+p.stu;p.exitUrl=p.APIbase+"../course/"+t+s},clearAttempts:function(e){p.clearAttempts.type=e,p.clearAttempts.show=!0},submitVersion:function(){h.endAssess()},redeemLatePass:function(){window.location=this.APIbase+"../course/redeemlatepass.php?cid="+p.cid+"&aid="+p.aid},makeException:function(){var e=p.APIbase+"../course/exception.php";e+="?cid="+p.cid+"&aid="+p.aid+"&uid"+p.uid,e+="&from=gb",window.location=e},showAllAns:function(){window.$("span[id^='ans']").removeClass("hidden"),window.$(".sabtn").replaceWith("<span>Answer: </span>")},beforeUnload:function(e){if(o()(p.scoreOverrides).length>0||o()(p.feedbacks).length>0)return e.preventDefault(),e.returnValue="You have unsaved changes","You have unsaved changes"}},created:function(){window.$(window).on("beforeunload",this.beforeUnload),"undefined"!==typeof window.APIbase?p.APIbase=window.APIbase:p.APIbase="/";var e=window.location.search.replace(/^.*cid=(\d+).*$/,"$1"),t=window.location.search.replace(/^.*aid=(\d+).*$/,"$1"),s=window.location.search.replace(/^.*uid=(\d+).*$/,"$1"),n=window.location.search.replace(/^.*from=(\w+).*$/,"$1"),r=window.location.search.replace(/^.*stu=(\d+).*$/,"$1");null!==p.assessInfo&&p.cid===e&&p.aid===t&&p.uid===s||(p.cid=e,window.cid=e,p.aid=t,p.uid=s,p.stu=r,p.queryString="?cid="+p.cid+"&aid="+p.aid+"&uid="+p.uid,this.setExitUrl(n),h.loadGbAssessData())}},ye=we,ke=(s("a02a"),Object(m["a"])(ye,r,a,!1,null,null,null)),qe=ke.exports,$e=s("9225");n["a"].config.productionTip=!1,new n["a"]({i18n:$e["a"],render:function(e){return e(qe)}}).$mount("#app")},dbe6:function(e,t,s){"use strict";var n=s("79f5"),r=s.n(n);r.a}});
//# sourceMappingURL=gbviewassess.js.map