'Systemutil.run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")
'
'WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2016520648_;_script infofile_;_ZIP::ssf2.xml_;_
'WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "67b3fe021eb77b5497f0" @@ hightlight id_;_2022767560_;_script infofile_;_ZIP::ssf3.xml_;_
'WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2021364984_;_script infofile_;_ZIP::ssf4.xml_;_


WpfWindow("OpenText MyFlight Sample_2").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1993789208_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfComboBox("toCity").Select "Seattle" @@ hightlight id_;_2015108520_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1993790408_;_script infofile_;_ZIP::ssf25.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1991303352_;_script infofile_;_ZIP::ssf28.xml_;_


'WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_984102_;_script infofile_;_ZIP::ssf7.xml_;_

'closed logout
