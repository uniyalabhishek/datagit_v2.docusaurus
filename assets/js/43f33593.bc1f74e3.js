(self.webpackChunkdatagit=self.webpackChunkdatagit||[]).push([[478],{1677:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var l=t(2122),o=t(9756),a=(t(7294),t(4137)),r=(t(390),["components"]),i={id:"if_else",title:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",sidebar_label:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",hide_title:!1,hide_table_of_contents:!1,description:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",keywords:["\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc Anaconda","\u0622\u0645\u0648\u0632\u0634 Anaconda","\u0646\u0635\u0628 Anaconda","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 Anaconda","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0645\u06a9","\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0645\u06a9"],image:"/img/python/python-logo.svg"},p=void 0,s={unversionedId:"python/beginner/flow_control/if_else",id:"python/beginner/flow_control/if_else",isDocsHomePage:!1,title:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",description:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",source:"@site/docs/python/beginner/flow_control/if_else.md",sourceDirName:"python/beginner/flow_control",slug:"/python/beginner/flow_control/if_else",permalink:"/docs/python/beginner/flow_control/if_else",version:"current",frontMatter:{id:"if_else",title:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",sidebar_label:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",hide_title:!1,hide_table_of_contents:!1,description:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",keywords:["\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc Anaconda","\u0622\u0645\u0648\u0632\u0634 Anaconda","\u0646\u0635\u0628 Anaconda","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 Anaconda","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0645\u06a9","\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0645\u06a9"],image:"/img/python/python-logo.svg"},sidebar:"python",previous:{title:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631",permalink:"/docs/python/beginner/flow_control/for_while"},next:{title:"\u0641\u0627\u0635\u0644\u0647 \u06af\u0630\u0627\u0631\u06cc",permalink:"/docs/python/beginner/indent"}},c=[{value:"<strong>\u0639\u0628\u0627\u0631\u062a If</strong>",id:"\u0639\u0628\u0627\u0631\u062a-if",children:[]},{value:"<strong>\u0639\u0628\u0627\u0631\u062a If Else</strong>",id:"\u0639\u0628\u0627\u0631\u062a-if-else",children:[]},{value:"<strong>\u0639\u0628\u0627\u0631\u062a If Elif Else</strong>",id:"\u0639\u0628\u0627\u0631\u062a-if-elif-else",children:[]}],u={toc:c};function d(n){var e=n.components,t=(0,o.Z)(n,r);return(0,a.kt)("wrapper",(0,l.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0639\u0628\u0627\u0631\u062a-if"},(0,a.kt)("strong",{parentName:"h2"},"\u0639\u0628\u0627\u0631\u062a If")),(0,a.kt)("p",null,"\u0634\u0631\u0637 \u06af\u0630\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645 \u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u06a9\u0647 \u062a\u0648\u06cc \u0632\u0646\u062f\u06af\u06cc \u0631\u0648\u0632\u0645\u0631\u0647 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u06cc\u0645 \u062e\u06cc\u0644\u06cc \u0637\u0628\u06cc\u0639\u06cc\u0647. \u0645\u062b\u0644\u0627 \u0627\u06af\u0631 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f\u060c \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646! \u062a\u0648\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646 \u0647\u0645 \u0628\u0647 \u062c\u0627\u06cc \u06a9\u0644\u0645\u0647 \u0627\u06af\u0631 \u0641\u0627\u0631\u0633\u06cc \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u0627\u0632 \u06a9\u0644\u0645\u0647 if \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645. \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u06cc\u0645 \u062c\u0645\u0644\u0647 \u0641\u0627\u0631\u0633\u06cc \u0628\u0627\u0644\u0627 \u0631\u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u0627\u06cc\u062a\u0648\u0646\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0627\u06cc\u0646\u0637\u0648\u0631\u06cc \u0645\u06cc\u0634\u0647:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f:\n  \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646\n")),(0,a.kt)("p",null,"\u06a9\u062f \u0632\u06cc\u0631 \u0645\u062b\u0627\u0644 \u0628\u0647\u062a\u0631\u06cc\u0647:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 5\ny = 10\n\nif x > y:\n  print('x az y bozorg tare')\n")),(0,a.kt)("p",null,"\u062a\u0648\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0627\u0648\u0644 \u062f\u0648 \u062a\u0627 \u0645\u062a\u063a\u06cc\u0631 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u06cc\u0645\u060c \u0628\u0639\u062f\u0634 \u0645\u06cc\u0627\u06cc\u0645 \u0627\u0648\u0646\u0647\u0627 \u0631\u0648 \u0645\u0642\u0627\u06cc\u0633\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u062a\u0648\u06cc \u0634\u0631\u0637\u0645\u0648\u0646 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0627\u06af\u0631 x > y \u06cc\u0639\u0646\u06cc 10 < 5 \u060c \u0628\u06cc\u0627\u062f \u06cc\u06a9 \u0639\u0628\u0627\u0631\u062a\u06cc \u0631\u0648 \u0686\u0627\u067e \u06a9\u0646\u0647. \u0648\u0644\u06cc \u0686\u0648\u0646 \u0634\u0631\u0637\u0645\u0648\u0646 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u060c \u067e\u0633 \u0647\u06cc\u0686 \u0627\u062a\u0641\u0627\u0642\u06cc \u0646\u0645\u06cc \u0627\u0641\u062a\u0647. \u062d\u0627\u0644\u0627 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u0631\u0648 \u0628\u0628\u06cc\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 5\ny = 10\n\nif x < y:\n  print('x az y kouchik tare')\n")),(0,a.kt)("p",null,"\u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0645\u062b\u0644 \u0645\u062b\u0627\u0644 \u0642\u0628\u0644\u06cc\u0634\u0647 \u0641\u0642\u0637 \u0634\u0631\u0637\u0645\u0648\u0646 \u0639\u0648\u0636 \u0634\u062f\u0647 \u06cc\u0639\u0646\u06cc \u062a\u0648\u06cc \u0634\u0631\u0637\u0645\u0648\u0646 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0627\u06af\u0631 x < y \u06cc\u0639\u0646\u06cc 10 > 5 \u060c \u0628\u06cc\u0627\u062f \u06cc\u06a9 \u0639\u0628\u0627\u0631\u062a\u06cc \u0631\u0648 \u0686\u0627\u067e \u06a9\u0646\u0647. \u0686\u0648\u0646 \u0634\u0631\u0637\u0645\u0648\u0646 \u062f\u0631\u0633\u062a\u0647 \u067e\u0633 \u0639\u0628\u0627\u0631\u062a \u0632\u06cc\u0631\u0634 \u0686\u0627\u067e \u0645\u06cc\u0634\u0647."),(0,a.kt)("h2",{id:"\u0639\u0628\u0627\u0631\u062a-if-else"},(0,a.kt)("strong",{parentName:"h2"},"\u0639\u0628\u0627\u0631\u062a If Else")),(0,a.kt)("p",null,"\u06cc\u06a9 \u0632\u0645\u0627\u0646\u06cc \u0628\u0627 \u062e\u0648\u062f\u0645\u0648\u0646 \u0645\u06cc\u06af\u06cc\u0645 \u06a9\u0647 \u0627\u06af\u0631 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646. \u062d\u0627\u0644\u0627 \u0627\u06af\u0631 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0646\u0628\u0648\u062f \u0686\u06cc\u061f \u0628\u0627\u06cc\u062f \u06cc\u0647 \u0646\u0642\u0634\u0647 \u062f\u06cc\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u062f\u06cc\u06af\u0647! \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0648 \u0645\u06cc\u0634\u0647 \u0628\u0627 if Else \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f:\n  \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646\n\nelse:\n  \u062a\u0648\u06cc \u062e\u0648\u0646\u0647 \u0641\u06cc\u0644\u0645 \u0628\u0628\u06cc\u0646\u06cc\u0645\n")),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0631\u0648 \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646\u0637\u0648\u0631\u06cc \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u0627 \u062e\u0648\u062f\u0645\u0648\u0646 \u0645\u06cc\u06af\u06cc\u0645 \u06a9\u0647 \u0627\u06af\u0631 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f\u060c \u0645\u06cc\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646\u060c \u0648\u06af\u0631\u0646\u0647 \u0641\u06cc\u0644\u0645 \u0628\u0628\u06cc\u0646\u06cc\u0645."),(0,a.kt)("p",null,"\u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062c\u0627\u0644\u0628\u062a\u0631\u0647:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 5\ny = 10\n\nif x > y:\n  print('x az y bozorg tare')\n\nelse:\n  print('x az y kouchik tare')\n")),(0,a.kt)("p",null,"\u062a\u0648\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0627\u0648\u0644 \u062f\u0648 \u062a\u0627 \u0645\u062a\u063a\u06cc\u0631 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u06cc\u0645\u060c \u0628\u0639\u062f\u0634 \u0645\u06cc\u0627\u06cc\u0645 \u0627\u0648\u0646\u0647\u0627 \u0631\u0648 \u0645\u0642\u0627\u06cc\u0633\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645. \u062a\u0648\u06cc \u0634\u0631\u0637\u0645\u0648\u0646 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0627\u06af\u0631 x > y \u06cc\u0639\u0646\u06cc 10 < 5 \u060c \u0628\u06cc\u0627\u062f \u06cc\u06a9 \u0639\u0628\u0627\u0631\u062a\u06cc \u0631\u0648 \u0686\u0627\u067e \u06a9\u0646\u0647. \u0648\u0644\u06cc \u0686\u0648\u0646 \u0634\u0631\u0637\u0645\u0648\u0646 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u060c \u0645\u06cc\u0631\u0647 \u0633\u0631\u0627\u063a else \u0648 \u06a9\u0627\u0631\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0648\u0646 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0647."),(0,a.kt)("p",null,'!! \u06cc\u06a9 \u0646\u06a9\u062a\u0647 \u062e\u06cc\u0644\u06cc \u062e\u06cc\u0644\u06cc \u062e\u06cc\u0644\u06cc \u0645\u0647\u0645 \u0627\u06cc\u0646\u062c\u0627 \u0645\u0637\u0631\u062d \u0645\u06cc\u0634\u0647 \u06a9\u0647 \u0648\u0627\u0642\u0639\u0627 \u0628\u0627\u06cc\u062f \u062a\u0648\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06cc \u062e\u0648\u062f\u062a\u0648\u0646 \u0628\u0647\u0634 \u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0627\u0648\u0646 \u0686\u06cc\u0632 \u0646\u06cc\u0633\u062a \u062c\u0632 "\u0641\u0627\u0635\u0644\u0647 \u06af\u0630\u0627\u0631\u06cc"!!!!!'),(0,a.kt)("p",null,"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u06a9\u0646\u0645 \u062d\u062a\u0645\u0627 \u062f\u0631\u0633 \u0641\u0627\u0635\u0644\u0647 \u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0631\u0648 \u0628\u0627 \u062f\u0642\u062a \u0628\u062e\u0648\u0646\u06cc\u062f."),(0,a.kt)("h2",{id:"\u0639\u0628\u0627\u0631\u062a-if-elif-else"},(0,a.kt)("strong",{parentName:"h2"},"\u0639\u0628\u0627\u0631\u062a If Elif Else")),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0627\u06cc\u0646\u0637\u0648\u0631\u06cc \u0634\u0631\u0637 \u0645\u06cc\u0630\u0627\u0631\u06cc\u0645 \u06a9\u0647 \u0627\u06af\u0631 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646. \u0645\u06cc\u0628\u06cc\u0646\u06cc\u0645 \u0647\u0648\u0627 \u062e\u0648\u0628 \u0646\u06cc\u0633\u062a. \u0645\u06cc\u06af\u06cc\u0645 \u062d\u0627\u0644\u0627 \u0627\u06af\u0631 \u0634\u0647\u0631\u0628\u0627\u0632\u06cc \u0628\u0627\u0632 \u0628\u0648\u062f\u060c \u0628\u0631\u06cc\u0645 \u0634\u0647\u0631\u0628\u0627\u0632\u06cc. \u0645\u06cc\u0628\u06cc\u0646\u06cc\u0645 \u0634\u0647\u0631\u0628\u0627\u0632\u06cc \u0647\u0645 \u0628\u0627\u0632 \u0646\u06cc\u0633\u062a. \u06a9\u0644\u06cc \u0634\u0631\u0637 \u062f\u06cc\u06af\u0647 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u0627\u06af\u0631 \u0641\u0644\u0627\u0646 \u0634\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0631\u0648 \u06a9\u0646\u06cc\u0645 \u0648 .... \u0648 \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0628\u0627 \u062e\u0648\u062f\u0645\u0648\u0646 \u0645\u06cc\u06af\u06cc\u0645 \u0627\u06af\u0631 \u0647\u06cc\u0686 \u06a9\u062f\u0648\u0645 \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0631\u0637 \u0647\u0627 \u062f\u0631\u0633\u062a \u0646\u0628\u0648\u062f\u0646\u060c \u062a\u0648\u06cc \u062e\u0648\u0646\u0647 \u0641\u06cc\u0644\u0645 \u0628\u0628\u06cc\u0646\u06cc\u0645. \u06cc\u0639\u0646\u06cc \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0634\u0631\u0637 \u0647\u0627 \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if \u0647\u0648\u0627 \u062e\u0648\u0628 \u0628\u0648\u062f:\n  \u0628\u0631\u06cc\u0645 \u0628\u06cc\u0631\u0648\u0646\n\nelif \u0634\u0647\u0631\u0628\u0627\u0632\u06cc \u0628\u0627\u0632 \u0628\u0627\u0634\u0647:\n  \u0628\u0631\u06cc\u0645 \u0634\u0647\u0631\u0628\u0627\u0632\u06cc\n\nelse:\n  \u062a\u0648\u06cc \u062e\u0648\u0646\u0647 \u0641\u06cc\u0644\u0645 \u0628\u0628\u06cc\u0646\u06cc\u0645\n")),(0,a.kt)("p",null,"\u0645\u062b\u0627\u0644 \u0639\u062f\u062f\u06cc \u0632\u06cc\u0631 \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 5\ny = 10\nz = 55\n\nif x > y:\n  print('x az y bozorg tare')\n\nelif x < z:\n  print('x az z kouchik tare')\n\nelse:\n  print('x az z bozorg tare')\n")),(0,a.kt)("p",null,"\u062a\u0648\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0627\u0648\u0644 \u0634\u0631\u0637 x > y \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0647 \u0648 \u0645\u06cc\u0628\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a. \u0645\u06cc\u0631\u0647 \u0633\u0631\u0627\u063a elif \u0648 \u0634\u0631\u0637 x < z \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0647. \u0645\u06cc\u0628\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a\u0647. \u067e\u0633 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631\u0634 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0647. \u062d\u0627\u0644\u0627 \u06a9\u062f \u0632\u06cc\u0631 \u0631\u0648 \u0628\u0628\u06cc\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"x = 5\ny = 10\nz = 55\n\nif x > y:\n  print('x az y bozorg tare')\n\nelif x > z:\n  print('x az z bozorg tare')\n\nelse:\n  print('x az z kouchik tare')\n")),(0,a.kt)("p",null,"\u062a\u0648\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0627\u0648\u0644 \u0634\u0631\u0637 x > y \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0647 \u0648 \u0645\u06cc\u0628\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a. \u0645\u06cc\u0631\u0647 \u0633\u0631\u0627\u063a elif \u0648 \u0634\u0631\u0637 x > z \u0631\u0648 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u0647. \u0645\u06cc\u0628\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a. \u067e\u0633 \u0645\u06cc\u0631\u0647 \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0633\u0631\u0627\u063a else \u0648 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631\u0634 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0647."),(0,a.kt)("p",null,"!! \u0628\u0627\u06cc\u062f \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0627\u06af\u0631 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0631\u0637 \u0647\u0627 \u062a\u0648\u06cc \u0641\u0627\u0635\u0644\u0647 \u0628\u0631\u0627\u0628\u0631 \u0627\u0646\u062c\u0627\u0645 \u0628\u0634\u0647\u060c \u0628\u0642\u06cc\u0647 \u0627\u0648\u0646 \u0634\u0631\u0637 \u0647\u0627 \u0648 else \u062f\u06cc\u06af\u0647 \u0627\u0646\u062c\u0627\u0645 \u0646\u0645\u06cc\u0634\u0647. \u0641\u0627\u0635\u0644\u0647 \u0628\u0631\u0627\u0628\u0631 \u0631\u0648 \u062a\u0648\u06cc \u062f\u0631\u0633 \u0641\u0627\u0635\u0644\u0647 \u06af\u0630\u0627\u0631\u06cc \u062a\u0648\u0636\u06cc\u062d \u0645\u06cc\u062f\u0645."))}d.isMDXComponent=!0}}]);