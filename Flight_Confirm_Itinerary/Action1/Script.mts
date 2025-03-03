'Systemutil.run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")

'Order
WpfWindow("OpenText MyFlight Sample_2").WpfEdit("passengerName").Set "Usman" @@ hightlight id_;_1942337312_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("OpenText MyFlight Sample_2").WpfButton("ORDER").Click @@ hightlight id_;_1993790984_;_script infofile_;_ZIP::ssf34.xml_;_

'Output  value

'WpfWindow("OpenText MyFlight Sample_2").WpfObject("Order 95 completed").Output CheckPoint("Order 95 completed") @@ hightlight id_;_2020904104_;_script infofile_;_ZIP::ssf20.xml_;_

