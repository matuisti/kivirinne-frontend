(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(43),s=a.n(i),l=a(124),o=(a(59),a(2)),c=a(3),u=a(5),h=a(4),m=a(6),d=a(126),p=a(44),b=a(10),f=a(125),v=a(13),y=a.n(v),k=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(e,t){return y.a.post("/users/login",{email:e,password:t}).then(function(e){return localStorage.setItem("jwt-token",e.data.token),Promise.resolve(e)})}},{key:"logOut",value:function(){this.removeToken()}},{key:"getToken",value:function(){return localStorage.getItem("jwt-token")}},{key:"removeToken",value:function(){localStorage.removeItem("jwt-token")}},{key:"getUser",value:function(e){return y.a.get("/users/getUsers",{headers:{token:"".concat(e)}}).then(function(e){return Promise.resolve(e)})}}]),e}(),E=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(e,t){return y.a.post("/users/login",{email:e,password:t}).then(function(e){return localStorage.setItem("jwt-token",e.data.token),Promise.resolve(e)})}},{key:"getDhtData",value:function(e,t,a){return y.a.get("/api/get/dht",{params:{interval:t,intervalformat:a},headers:{token:"".concat(e)}}).then(function(e){return Promise.resolve(e)}).catch(function(e){return console.error(e),Promise.reject(e)})}},{key:"getSensorDataBetweenTwoDays",value:function(e,t,a){return y.a.get("/api/get/sensorDataBetweenTwoDays",{params:{startDate:t,endDate:a},headers:{token:"".concat(e)}}).then(function(e){return Promise.resolve(e)}).catch(function(e){return console.error(e),Promise.reject(e)})}},{key:"getCurrentSensordata",value:function(e){return y.a.get("/api/get/currentsensordata",{headers:{token:"".concat(e)}}).then(function(e){return Promise.resolve(e)}).catch(function(e){return console.error(e),Promise.reject(e)})}},{key:"getWeatherForecast",value:function(){return y.a.get("http://api.openweathermap.org/data/2.5/forecast?id=654047&APPID=cb00db7a6e3bddca1986870cb15a0dfe").then(function(e){return Promise.resolve(e)}).catch(function(e){console.error(e)})}}]),e}(),D=a(23),g=a.n(D),w=(a(79),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.Query=new E,a.handleSideBarHide=a.handleSideBarHide.bind(Object(b.a)(Object(b.a)(a))),a.state={visible:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSideBarHide",value:function(){this.setState({visible:!this.state.visible})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.visible&&r.a.createElement("div",{className:"sidebar-body"},r.a.createElement("a",{className:"sidebar-title"},r.a.createElement("i",{className:"fa fa-fort-awesome"}),"Kivirinne"),r.a.createElement(f.a,{to:"/dashboard",style:C.navLink,className:"sidebar-btn",activeClassName:"sidebar-btn-active"},r.a.createElement("i",{className:"fa fa-tachometer"}),"Perustiedot"),r.a.createElement(f.a,{to:"/home",style:C.navLink,className:"sidebar-btn",activeClassName:"sidebar-btn-active"},r.a.createElement("i",{className:"fa fa-thermometer"}),"Sis\xe4ilma"),r.a.createElement(f.a,{to:"/power",style:C.navLink,className:"sidebar-btn",activeClassName:"sidebar-btn-active"},r.a.createElement("i",{className:"fa fa-bolt"}),"S\xe4hk\xf6"),r.a.createElement(f.a,{to:"/camera",style:C.navLink,className:"sidebar-btn",activeClassName:"sidebar-btn-active"},r.a.createElement("i",{className:"fa fa-camera"}),"Kamerat"),r.a.createElement(f.a,{to:"/sensors",style:C.navLink,className:"sidebar-btn",activeClassName:"sidebar-btn-active"},r.a.createElement("i",{className:"fa fa-battery-half"}),"Mittarit"),r.a.createElement("button",{onClick:this.handleSideBarHide},r.a.createElement("i",{className:"fa fa-bars"}))))}}]),t}(n.Component)),C={navLink:{textDecoration:"none",color:"white",fontSize:"17px"}},O=w,j=a(127),N=(a(84),a(86),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).Auth=new k,e.state={dropDown:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleLogout",value:function(){this.Auth.logOut(),this.props.history.push("/login")}},{key:"dropDown",value:function(){this.setState({dropDown:!this.state.dropDown})}},{key:"render",value:function(){var e=g()({"fa fa-caret-down":!0},{rotate:this.state.dropDown}),t=g()(this.state.dropDown?"dropdown-content-visible":"dropdown-content-hidden",{"dropdown-content":!0});return r.a.createElement("div",{className:"topnav-body"},r.a.createElement("div",{className:"topnav"},r.a.createElement("a",{className:"topnav-title "},r.a.createElement("i",{className:"fa fa-fort-awesome"}),"Kivirinne"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropbtn",onClick:this.dropDown.bind(this)},"Asetukset",r.a.createElement("i",{className:e}))),r.a.createElement("div",{className:t},r.a.createElement("a",null,"Profiili"),r.a.createElement("a",{onClick:this.handleLogout.bind(this)},"Kirjaudu ulos")),r.a.createElement("button",{className:"dropbtn-icon",onClick:this.dropDown.bind(this)},r.a.createElement("i",{className:"fa fa-bars"}))))}}]),t}(n.Component)),S=Object(j.a)(N),L=(a(88),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.state={user:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.Auth.getToken();t||(this.props.history.push("/login"),console.log("error")),this.Auth.getUser(t).then(function(t){e.setState({user:t.data})}).catch(function(t){e.state=null,e.Auth.removeToken(),e.props.history.push("/login")})}},{key:"render",value:function(){return null==this.state.user?r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"App-loader"})):r.a.createElement("div",{className:"authenticated-component-body"},this.props.children)}}]),t}(n.Component)),T=Object(j.a)(L),A=(a(40),a(7)),M=a.n(A),x=a(47),P=a(31);function H(){M.a.setOptions({lang:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Ke\xe4skuu","Hein\xe4kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],weekdays:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],shortMonths:["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"],resetZoom:"Nollaa suurennus"}})}x(M.a),P(M.a);var B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={chartOptions:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.base){case"plain":this.state.chartOptions={chart:{type:"spline",marginBottom:10,marginTop:0},title:{text:""},subtitle:{enabled:!1},xAxis:{visible:!1},yAxis:{visible:!1},legend:{enabled:!1},credits:{enabled:!1},tooltip:{enabled:!1},plotOptions:{series:{marker:{enabled:!1},states:{hover:{enabled:!0}}},line:{dataLabels:{enabled:!1},enableMouseTracking:!1}},series:[{data:this.props.data}]};break;case"full":this.state.chartOptions=function(e){return{chart:{zoomType:"x",type:"spline",resetZoomButton:{position:{align:"right",x:0,y:-25},theme:{fill:"white",stroke:"silver",r:5,states:{hover:{fill:"#EEEEEE",style:{color:"black"}}}}}},title:{text:e.title,align:"left",margin:0,x:30},yAxis:{title:{enabled:!1}},xAxis:{type:"datetime",dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"}},navigator:{enabled:!1},credits:{enabled:!1},rangeSelector:{selected:4,inputEnabled:!1,buttonTheme:{visibility:"hidden"},labelStyle:{visibility:"hidden"}},plotOptions:{series:{marker:{enabled:!0},states:{hover:{enabled:!0}}},area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,M.a.getOptions().colors[0]],[1,M.a.Color(M.a.getOptions().colors[0]).setOpacity(0).get("rgba")]]},marker:{radius:2},lineWidth:2,states:{hover:{lineWidth:1}},threshold:null}},series:e.data}}(this.props)}H(),this.state.chartOptions.chart=new M.a[this.props.type||"Chart"](this.props.container,this.state.chartOptions)}},{key:"componentWillUnmount",value:function(){this.state.chartOptions.chart.destroy()}},{key:"render",value:function(){return r.a.createElement("div",{className:"line-chart-body"},r.a.createElement("div",{className:"line-chart-wrapper",key:this.props.key,id:this.props.container}))}}]),t}(n.Component),I=a(48),K=a.n(I);a(91),a(93);function Y(e,t){return{background:{fill:e},text:{fill:t},path:{stroke:"#fff"},trail:{stroke:"transparent"}}}var F=function(e){var t=e.percentage,a=e.unit,n=e.clockwise,i=e.type,s=(e.name,null);switch(i){case"temp":s=Y("#3e98c7","#fff");break;case"hum":s=Y("orange","white");break;default:s=Y("red","#fff")}return r.a.createElement("div",{className:"circular-progressbar-body"},r.a.createElement(K.a,{percentage:t,text:t+a,counterClockwise:n,background:!0,backgroundPadding:6,styles:s}))},Q=a(49),R=a.n(Q),G=a(26),W=a(50),U=a.n(W),J=(a(106),a(19)),z=a.n(J),Z=(a(109),function(e){e.placeholder;var t=e.onDayChange,a=e.selectedDays,n=e.disabledDays,i=e.mode;return r.a.createElement("div",{className:"date-picker"},r.a.createElement(U.a,{formatDate:J.formatDate,parseDate:J.parseDate,placeholder:"".concat(Object(J.formatDate)(new Date)),onDayChange:t,dayPickerProps:{selectedDays:a,disabledDays:Object(G.a)({},i,n),locale:"fi",localeUtils:z.a,todayButton:"T\xe4n\xe4\xe4n"}}))}),q=a(17),V=a.n(q),X=(a(110),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChangeStart=function(e){return a.handleChange({startDate:e})},a.handleChangeEnd=function(e){return a.handleChange({endDate:e})},a.handleChange=function(e){var t=e.startDate,n=e.endDate;t=t||a.state.startDate,n=n||a.state.endDate,R()(t,n)&&(n=t),a.setState({startDate:t,endDate:n})},a.Auth=new k,a.api=new E,a.state={lineLoad:!1,pieLoad:!1,rawData:null,lineChartData:null,pieChartData:null,startDate:new Date,endDate:new Date},a.sortChartDataByTime=a.sortChartDataByTime.bind(Object(b.a)(Object(b.a)(a))),a.lineChartRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleError",value:function(e){500===e.response.status&&(this.Auth.logOut(),this.props.history.push("/login"))}},{key:"initLineChart",value:function(e,t){var a=this,n=this.timeFormatter(this.state.startDate,this.state.endDate);this.api.getSensorDataBetweenTwoDays(e,"2019-01-01 00:00:00",n.endDate).then(function(e){a.setState({lineChartData:e.data,lineLoad:!0}),console.log(e.data)})}},{key:"initPieChart",value:function(e,t){Object.keys(t.data[0].airData);var a=[{name:"L\xe4mp\xf6tila",data:t.data[t.data.length-1].airData.temperature},{name:"Kosteus",data:t.data[t.data.length-1].airData.humidity}];this.setState({pieChartData:a,pieLoad:!0})}},{key:"timeFormatter",value:function(e,t){return e.setHours(0,0,0),t.setHours(23,59,0),{startDate:V()(e).format("YYYY-MM-DD HH:mm:ss"),endDate:V()(t).format("YYYY-MM-DD HH:mm:ss")}}},{key:"sortChartDataByTime",value:function(){var e=this.timeFormatter(this.state.startDate,this.state.endDate);this.getSensorData(e.startDate,e.endDate)}},{key:"getSensorData",value:function(e,t){var a=this,n=this.Auth.getToken();this.api.getSensorDataBetweenTwoDays(n,e,t).then(function(e){a.updateLineChart(e.data),console.log(e.data)})}},{key:"updateLineChart",value:function(e){var t=this;e.map(function(e,a){t.lineChartRef.current.state.chartOptions.chart.series[a].setData(e.data)})}},{key:"componentDidMount",value:function(){var e=this,t=this.Auth.getToken();this.api.getDhtData(t,1,"YEAR").then(function(t){return e.setState({rawData:t.data}),t}).then(function(a){e.initLineChart(t,a),e.initPieChart(t,a),setInterval(function(){return e.sortChartDataByTime()},15e4)}).catch(function(t){console.error(t),e.handleError(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"indoor-air-body"},r.a.createElement("div",{className:"chart-row2"},r.a.createElement("div",{className:"chart-column full"},r.a.createElement("div",{className:"chart"},this.state.pieLoad?r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left"}},r.a.createElement("label",{style:{display:"block"}},"Keitti\xf6"),r.a.createElement(F,{type:"temp",percentage:this.state.pieChartData[0].data,unit:"\xb0C",clockwise:!1}),r.a.createElement(F,{type:"hum",percentage:this.state.pieChartData[1].data,unit:"%",clockwise:!1})),r.a.createElement("div",{style:{float:"left"}},r.a.createElement("label",{style:{display:"block"}},"Eteinen"),r.a.createElement(F,{type:"temp",percentage:this.state.pieChartData[0].data,unit:"\xb0C",clockwise:!1}),r.a.createElement(F,{type:"hum",percentage:this.state.pieChartData[1].data,unit:"%",clockwise:!1})),r.a.createElement("div",{style:{float:"left"}},r.a.createElement("label",{style:{display:"block"}},"Olohuone"),r.a.createElement(F,{type:"temp",percentage:this.state.pieChartData[0].data,unit:"\xb0C",clockwise:!1}),r.a.createElement(F,{type:"hum",percentage:this.state.pieChartData[1].data,unit:"%",clockwise:!1}))):r.a.createElement("div",{className:"Graph-loader"})))),r.a.createElement("div",{className:"chart-controller"},r.a.createElement("div",{className:"chart-column full"},r.a.createElement("div",{className:"controller"},r.a.createElement("label",{style:{display:"block"}},"Etsi aikav\xe4lilt\xe4"),r.a.createElement(Z,{placeholder:"",onDayChange:this.handleChangeStart,selectedDays:this.state.startDate,disabledDays:this.state.endDate,mode:"after"}),"-",r.a.createElement(Z,{placeholder:"",onDayChange:this.handleChangeEnd,selectedDays:this.state.endDate,disabledDays:this.state.startDate,mode:"before"}),r.a.createElement("button",{onClick:this.sortChartDataByTime},"Etsi")))),r.a.createElement("div",{className:"chart-row1"},r.a.createElement("div",{className:"chart-column full"},r.a.createElement("div",{className:"chart"},this.state.lineLoad?r.a.createElement(B,{container:"lineChart1",ref:this.lineChartRef,type:"Chart",title:"Sis\xe4ilma",base:"full",data:this.state.lineChartData}):r.a.createElement("div",{className:"Graph-loader"})))))}}]),t}(n.Component)),$=(a(112),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=a.handleInputChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a.Auth=new k,a.state={data:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.email&&this.state.password?this.Auth.login(this.state.email,this.state.password).then(function(e){t.props.history.push("/dashboard")}).catch(function(e){alert(e)}):alert("T\xe4yt\xe4 molemmat kent\xe4t")}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-body"},r.a.createElement("div",{className:"form-header"}),r.a.createElement("div",{className:"form-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"fname"},"S\xe4hk\xf6posti"),r.a.createElement("input",{className:"form-input",type:"text",name:"email",placeholder:"S\xe4hk\xf6posti",onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"lname"},"Salasana"),r.a.createElement("input",{className:"form-input",type:"password",name:"password",placeholder:"Salasana",onChange:this.handleInputChange}),r.a.createElement("input",{className:"form-btn",type:"submit",value:"Kirjaudu"}))))}}]),t}(n.Component)),_=(a(114),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.Query=new E,a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.Auth.getToken()}},{key:"render",value:function(){return r.a.createElement("div",{className:"camera-body"},r.a.createElement("div",{className:"stream-container"},r.a.createElement("img",{src:"http://192.168.0.117:8082/?action=stream"})))}}]),t}(n.Component)),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.Query=new E,a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.Auth.getToken()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sensorit"))}}]),t}(n.Component),te=(a(42),a(18)),ae=a(51),ne=a(52);te.b.add(ne.a);var re=function(e){var t=e.loaded,a=e.chartName,n=e.title,i=e.chartData,s=e.unit,l=e.icon;return r.a.createElement("div",{className:"plain-chart-column plain"},r.a.createElement("div",{className:"chart-text"},r.a.createElement("p",null,i[i.length-1]),r.a.createElement("p",null,s),r.a.createElement("p",null,n),r.a.createElement("p",null,r.a.createElement(ae.a,{icon:l}))),r.a.createElement("div",{className:"chart"},t?r.a.createElement(B,{container:a,type:"Chart",title:n,base:"plain",data:i}):r.a.createElement("div",{className:"Graph-loader"})))},ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.Query=new E,a.state={weekData1:[7,6.9,9.5,18.5,15.4,21.5,25.2,16.5,23.3,18.3,13.9,9.6],weekData2:[0,7.9,5.5,10.5,18.4,20.5,15.2,26.5,15.3,18.3,10.9,20.6],weekData3:[12,13.9,16.5,7.5,13.4,25.5,15.2,20.5,13.3,28.3,5.9,4.6],lineLoad:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.Auth.getToken();this.Query.getCurrentSensordata(t).then(function(t){console.log(t.data),e.setState({lineLoad:!0})}).catch(function(e){console.error(e)}),this.Query.getWeatherForecast().then(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard-body"},r.a.createElement("div",{className:"plain-chart-row1"},r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"tempChart1",title:"Olohuone l\xe4mpotila",chartData:this.state.weekData1,unit:"\xb0C",icon:"temperature-high"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"tempChart2",title:"Eteinen l\xe4mpotila",chartData:this.state.weekData2,unit:"\xb0C",icon:"temperature-high"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"tempChart3",title:"Makuuhuone l\xe4mpotila",chartData:this.state.weekData3,unit:"\xb0C",icon:"temperature-low"})),r.a.createElement("div",{className:"plain-chart-row1"},r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"humidityChart1",title:"Olohuone kosteus",chartData:this.state.weekData1,unit:"%",icon:"tint"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"humidityChart2",title:"Eteinen kosteus",chartData:this.state.weekData2,unit:"%",icon:"tint"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"humidityChart3",title:"Makuuhuone kosteus",chartData:this.state.weekData3,unit:"%",icon:"tint"})),r.a.createElement("div",{className:"plain-chart-row1"},r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"electricChart",title:"S\xe4hk\xf6nkulutus",chartData:this.state.weekData1,unit:"W",icon:"bolt"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"waterFlowChart",title:"Tuloveden virtaus",chartData:this.state.weekData1,unit:"l/min",icon:"water"}),r.a.createElement(re,{loaded:this.state.lineLoad,chartName:"waterTempChart",title:"Tuloveden l\xe4mp\xf6tila",chartData:this.state.weekData1,unit:"\xb0C",icon:"thermometer-quarter"})))}}]),t}(n.Component),se=a(32),le=a.n(se),oe=a(53),ce=(n.Component,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).Auth=new k,a.Query=new E,a.state={lineLoad:!1,pieLoad:!1,rawData:null,lineChartData:null,pieChartData:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleError",value:function(e){500===e.response.status&&(this.Auth.logOut(),this.props.history.push("/login"))}},{key:"initLineChart",value:function(e,t){var a=Object.keys(t.data[0].airData),n=["RGB(250, 128, 114)","RGB(93, 173, 226)"],r=[];a.forEach(function(e,i){var s=t.data.map(function(e){return[1e3*(e.time+7200),e.airData[a[i]]]});r[i]={name:a[i],data:s,color:n[i],type:"line",lineWidth:2.5}}),this.setState({lineChartData:r,lineLoad:!0})}},{key:"initPieChart",value:function(e,t){Object.keys(t.data[0].airData);var a=[{name:"L\xe4mp\xf6tila",data:t.data[t.data.length-1].airData.temperature},{name:"Kosteus",data:t.data[t.data.length-1].airData.humidity}];this.setState({pieChartData:a,pieLoad:!0})}},{key:"componentDidMount",value:function(){var e=this,t=this.Auth.getToken();this.Query.getDhtData(t,1,"YEAR").then(function(t){return console.log(t.data),e.setState({rawData:t.data}),t}).then(function(a){e.initLineChart(t,a),e.initPieChart(t,a)}).catch(function(t){e.handleError(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"chart-row1"},r.a.createElement("div",{className:"chart-column full"},r.a.createElement("div",{className:"chart"},this.state.lineLoad?r.a.createElement(B,{container:"ElectricMeterChart",type:"Chart",title:"S\xe4hk\xf6nkulutus",base:"full",data:this.state.lineChartData}):r.a.createElement("div",{className:"Graph-loader"})))))}}]),t}(n.Component)),ue=(a(121),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-body"},r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/login",component:$}),r.a.createElement(T,null,r.a.createElement(O,null),r.a.createElement(S,null),r.a.createElement("div",{className:"component-body"},r.a.createElement(p.a,{exact:!0,path:"/home",component:X}),r.a.createElement(p.a,{exact:!0,path:"/camera",component:_}),r.a.createElement(p.a,{exact:!0,path:"/sensors",component:ee}),r.a.createElement(p.a,{exact:!0,path:"/dashboard",component:ie}),r.a.createElement(p.a,{exact:!0,path:"/power",component:ce})))))}}]),t}(n.Component));s.a.render(r.a.createElement(l.a,null,r.a.createElement(ue,null)),document.getElementById("root"))},40:function(e,t,a){},42:function(e,t,a){},54:function(e,t,a){e.exports=a(123)},59:function(e,t,a){},79:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},93:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.9b766bba.chunk.js.map