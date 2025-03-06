'Update 

'output 

wait(3)
'WpfWindow("OpenText MyFlight Sample").Output CheckPoint("OpenText MyFlight Sample Application") @@ hightlight id_;_918364_;_script infofile_;_ZIP::ssf1.xml_;_


WpfWindow("OpenText MyFlight Sample").Output CheckPoint("OpenText MyFlight Sample Application_2") @@ hightlight id_;_131970_;_script infofile_;_ZIP::ssf10.xml_;_


WpfWindow("OpenText MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2008586520_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2056507560_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_1933759784_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("byNumberWatermark").Type parameter("Order_No_Out") @@ hightlight id_;_2008591704_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SEARCH").Click @@ hightlight id_;_2008595880_;_script infofile_;_ZIP::ssf6.xml_;_

Dim objDropdown, currentSelection, newSelection

' Identify the dropdown object (Modify the object properties as per your application)
Set objDropdown = WpfWindow("OpenText MyFlight Sample").WpfComboBox("flightClassCombo")

' Get the current selection
currentSelection = objDropdown.GetROProperty("value")
If currentSelection = "Economy" Then
   WpfWindow("OpenText MyFlight Sample").WpfComboBox("flightClassCombo").Select "Business"
ElseIf currentSelection = "Business" Then
    'newSelection = "Economy"
    WpfWindow("OpenText MyFlight Sample").WpfComboBox("flightClassCombo").Select "Economy"

'Else
'    MsgBox "Unexpected dropdown value: " & currentSelection
'    'Exit Sub



'WpfWindow("OpenText MyFlight Sample").WpfComboBox("flightClassCombo").Select "Business" @@ hightlight id_;_2010029536_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("updateBtn").Click @@ hightlight id_;_2010029200_;_script infofile_;_ZIP::ssf9.xml_;_

 End If

