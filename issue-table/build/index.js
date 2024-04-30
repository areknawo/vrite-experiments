var g=Symbol("usableEnv"),l=Symbol("value"),p=Symbol("id"),b=Symbol("componentName"),a={data:{},func:{},views:{},currentScope:null},d={},f=()=>`_${Math.random().toString(36).substring(2,9)}`,e=new Proxy({},{get(t,o){let r=()=>{};return Object.defineProperty(r,b,{value:o}),r}});var n=(t,o,...r)=>({component:t[b]||"Fragment",slot:r,props:Object.fromEntries(Object.keys(o||{}).map(i=>{let s=o[i];return s&&s[p]?[i,s[p]]:[i,s]}))});var m=t=>{let o=f(),r={[p]:o,[l]:t};return a.views[o]=r,r},w=t=>{let o=d[t];o&&(o.func.forEach(r=>{delete a.func[r]}),o.temp.forEach(r=>{let i=a.data.temp;i()&&delete i()[r]}))},y=t=>({getEnvironment:()=>a,getMetadata:()=>({__value:l,__id:p,__componentName:b,__usableEnv:g}),generateRuntimeSpec:()=>({...t,onUninstall:t.onUninstall?.[p],onConfigure:t.onConfigure?.[p],configurationView:t.configurationView?.[p],contentPieceView:t.contentPieceView?.[p],blockActions:t.blockActions?.map(o=>({...o,view:o.view[p]})),elements:t.elements?.map(o=>({...o,view:o.view[p]}))}),generateView:async(o,r,i)=>{let s=a.views[o]?.[l];if(s){a.currentScope={func:[],temp:[],uid:i};let u=await s(r);return d[`view:${i}`]=a.currentScope,a.currentScope=null,u}return{component:"",slot:[]}},runFunction:async(o,r,i)=>{let s=a.func[o];s&&(a.currentScope={func:[],temp:[],uid:i},await s(r),d[`func:${i}`]=a.currentScope,a.currentScope=null,w(`func:${i}`))},removeScope:w});var V=y({elements:[{type:"Audit",view:m(({use:t,css:o})=>n(e.View,{class:o`items-center justify-start p-2 m-0 my-4 border-b-2 border-gray-200 dark:border-gray-700`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`border-b-2 border-gray-200 dark:border-gray-700`},n(e.Content,{allowed:["heading"]}))),n(e.Element,{type:"Scope"},n(e.View,{class:o``},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`},"Scope"),n(e.Content,null))),n(e.Element,{type:"Contracts"},n(e.View,{class:o``},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`},"Contracts"),n(e.Content,null))))))},{type:"Contract",view:m(({use:t,css:o})=>n(e.View,{class:o`items-center justify-start p-2 m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`items-start p-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`},n(e.Content,{allowed:["paragraph"]}))),n(e.Element,{type:"Description"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Description"),n(e.Content,null))),n(e.Element,{type:"PrivilegedFunctions"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Privileged functions"),n(e.Content,null))),n(e.Element,{type:"Issues"},n(e.View,{class:o`border-b-2 p-4 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`},"Issues"),n(e.Content,null))))))},{type:"Issue",view:m(({use:t,css:o})=>{let[r,i]=t("props.severity");return r()||i("informational"),n(e.View,{class:o`flex flex-col items-center justify-start m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700`},n(e.Content,null,n(e.Element,{type:"Title"},n(e.View,{class:o`flex items-start border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`},n(e.View,{class:o`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 px-2 inline-flex items-center`},"Issue"),n(e.Content,{allowed:["paragraph"]}))),n(e.Element,{type:"Severity"},n(e.View,{class:o`flex items-start border-b-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-10 font-mono min-w-40 px-2 inline-flex items-center`},"Severity"),n(e.View,{class:o`flex items-center`},n(e.Select,{"bind:value":r,class:"mx-0",options:[{label:"Informational",value:"informational"},{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"},{label:"Governance",value:"governance"}]})))),n(e.Element,{type:"Description"},n(e.View,{class:o`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-40 px-2 inline-flex items-center`},"Description"),n(e.Content,null))),n(e.Element,{type:"Recommendation"},n(e.View,{class:o`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-40 px-2 inline-flex items-center`},"Recommendation"),n(e.Content,null))),n(e.Element,{type:"Resolution"},n(e.View,{class:o`flex items-start py-2 border-gray-200 dark:border-gray-700 rounded-b-2xl`},n(e.View,{class:o`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-40 px-2 inline-flex items-center`},"Resolution"),n(e.Content,null)))))})}]});export{V as default};
