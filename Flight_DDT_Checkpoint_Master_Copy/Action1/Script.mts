Systemutil.run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")

WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2016520648_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "67b3fe021eb77b5497f0" @@ hightlight id_;_2022767560_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2021364984_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2002221216_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_2002226256_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2014409040_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfEdit("passengerName").Set "Usman" @@ hightlight id_;_2005770224_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("OpenText MyFlight Sample_2").Check CheckPoint("OpenText MyFlight Sample Application") @@ hightlight id_;_67094_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("ORDER").Check CheckPoint("ORDER") @@ hightlight id_;_2002185360_;_script infofile_;_ZIP::ssf16.xml_;_

WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_984102_;_script infofile_;_ZIP::ssf7.xml_;_

'closed logout
