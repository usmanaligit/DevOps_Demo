'Systemutil.run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")

'Search flights

WpfWindow("OpenText MyFlight Sample_2").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_2002356360_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfComboBox("toCity").Select "Sydney" @@ hightlight id_;_1882609392_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2002315368_;_script infofile_;_ZIP::ssf24.xml_;_

'Select flights
WpfWindow("OpenText MyFlight Sample_2").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("OpenText MyFlight Sample_2").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1991314440_;_script infofile_;_ZIP::ssf30.xml_;_


