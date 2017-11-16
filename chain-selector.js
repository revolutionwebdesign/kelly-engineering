function chain_type1( )
{
var mediawidth = matchMedia( "(max-width: 480px)");
var soiltype  = document.getElementById("soil-type").value;
var application = document.getElementById("application").value;
var tractortype  = document.getElementById("tractor-type").value;

var chaintype = soiltype + application;
var invalidconfig = "This combination of application and soil type is not valid";


var image = document.getElementById('myImage');
var sideimage1 = document.getElementById('SideImage1');
var sideimage2 = document.getElementById('SideImage2');

var div1 = document.getElementById("selector");
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var power = document.getElementById("power");
var tryagain = document.getElementById("tryagain");
var comboheading = document.getElementById("combo");
var machinesize = document.getElementById("machine-size");
var machinesizemobile1 = document.getElementById("machine-size-mobile-1");
var machinesizemobile2 = document.getElementById("machine-size-mobile-2");
var machinetypeheader = document.getElementById("machinetypeheader");

var hmodel = document.getElementById("h-model");
var hwwidth = document.getElementById("h-w-width");
var htwidth = document.getElementById("h-t-width");
var htheight = document.getElementById("h-t-height");
var htlength = document.getElementById("h-t-length");

var powerdisclaimer = "( Power requirement varies dramatically with soil conditions. Values given are an approximate guide. In soils where penetration is likely to be minimal, less power will be required. In cultivated soil or very soft soils more power may be required.)"; 

switch (chaintype) 
{
       case "A1": 
           demo.innerHTML = invalidconfig;
           image.src = "";
           break;
       case "B1":
       case "C1":
       case "D1":
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "E1": 
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/01/30-CL2-SD49-900.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "CL2/SD49 Combination";
           demo.innerHTML = "The ultimate one pass combo for pre-seeding, weed kill and seedbed preparation in a wide range of residue. The CL2’s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles, while the SD49 chains will help break any clumps and remove stubborn weeds. Providing a perfect seedbed, the multi-directional spiked disc chains are flexible and can be swapped for a more or less aggressive action. Ideal in undulating grounds at risk of water run off and erosion, the SD49’s tend not to fine up the soil and help pin it to the hillside.  ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "F1": 
           div1.style.display = "none";
           image.src = "/wp-content/uploads/30-CL1-CL1-900.png";
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "A2": 
       case "B2":
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/01/30-CL2-SD49-900.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "CL2/SD49 Combination";
           demo.innerHTML = "The ultimate one pass combo for pre-seeding, weed kill and seedbed preparation in a wide range of residue. The CL2’s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles, while the SD49 chains will help break any clumps and remove stubborn weeds. Providing a perfect seedbed, the multi-directional spiked disc chains are flexible and can be swapped for a more or less aggressive action. Ideal in undulating grounds at risk of water run off and erosion, the SD49s tend not to fine up the soil and help pin it to the hillside.  ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "C2":            
       case "D2": 
       case "E2": 
       case "F2": 
           image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
           demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. These chains are recommended where erosion from run off can be an issue. If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A3": 
      case "B3":
      case "C3": 
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/01/30-CL2-CL2-900.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           comboheading.innerHTML = "CL2/CL2 Combination";
           demo.innerHTML = "CL2s on the front and back is our most aggressive combination and provides a lot of tillage for continuous cropping environments. It is ideal for heavy cereal residue management where the discs do a great job of cutting and chopping the stubble, incorporating it with the topsoil to pin it down and promoting speedy microbial breakdown.It is also one of our most effective weed management disc and is ideal for land reclamation too.  If you add a rear set of spiked discs, they make a great combination for cover crop seeding and seed bed preparation.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "D3": 
       case "E3": 
       case "F3": 
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A4": 
      case "B4":
           image.src = "/wp-content/uploads/2016/01/30-CL1-W36-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2015/09/W36-disc-small.png";
           comboheading.innerHTML = "CL1/W36 Combination";
           demo.innerHTML = "In loam soils or in wet conditions this versatile combination is both economical and effective. An excellent levelling and seedbed preparation tool with shallow tillage providing a layer of tilth for excellent planter performance and seed soil contact. The lighter less aggressive W36 stays clean in sticky soils and provides a less aggressive option in lighter soil types.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "C4": 
       case "D4": 
           image.src = "/wp-content/uploads/2016/05/30-CL1-CL1-900-TR.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition. ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       case "E4": 
       case "F4": 
           image.src = "/wp-content/uploads/2016/01/30-CL2-SD49-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "CL2/SD49 Combination";
           demo.innerHTML = "The ultimate one pass combo for pre-seeding, weed kill and seedbed preparation in a wide range of residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles, while the SD49 chains will help break any clumps and remove stubborn weeds. Providing a perfect seedbed, the multi-directional spiked disc chains are flexible and can be swapped for a more or less aggressive action. Ideal in undulating grounds at risk of water run off and erosion, the SD49’s tend not to fine up the soil and help pin it to the hillside.  ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A5": 
      case "B5":
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/01/30-CL2-CL2-900.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           comboheading.innerHTML = "CL2/CL2 Combination";
           demo.innerHTML = "CL2s on the front and back is our most aggressive combination and provides a lot of tillage for continuous cropping environments. It is ideal for heavy cereal residue management where the discs do a great job of cutting and chopping the stubble, incorporating it with the topsoil to pin it down and promoting speedy microbial breakdown.It is also one of our most effective weed management disc and is ideal for land reclamation too.  If you add a rear set of spiked discs, they make a great combination for cover crop seeding and seed bed preparation.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "C5": 
      case "D5": 
      case "E5": 
           image.src = "/wp-content/uploads/2016/01/30-CL2-SD49-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "CL2/SD49 Combination";
           demo.innerHTML = "The ultimate one pass combo for pre-seeding, weed kill and seedbed preparation in a wide range of residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles, while the SD49 chains will help break any clumps and remove stubborn weeds. Providing a perfect seedbed, the multi-directional spiked disc chains are flexible and can be swapped for a more or less aggressive action. Ideal in undulating grounds at risk of water run off and erosion, the SD49s tend not to fine up the soil and help pin it to the hillside.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F5":
            image.src = "/wp-content/uploads/2016/05/30-CL1-CL1-900-TR.png";
           document.getElementById("demo").innerHTML = "Our most popular combination of them all, the CL1s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition. ";
           break
		    demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A6": 
	       document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "B6": 
      case "C6": 
	       div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "D6":
      case "E6": 
	       div1.style.display = "none";
           image.src = "/wp-content/uploads/30-CL1-CL1-900.png";
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F6":
            image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
           demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. These chains are recommended where erosion from run off can be an issue. If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A7": 
           image.src = "/wp-content/uploads/2016/01/30-CL1-W36-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2015/09/W36-disc-small.png";
           comboheading.innerHTML = "CL1/W36 Combination";
           demo.innerHTML = "In loam soils or in wet conditions this versatile combination is both economical and effective. An excellent levelling and seedbed preparation tool with shallow tillage providing a layer of tilth for excellent planter performance and seed soil contact. The lighter less aggressive W36 stays clean in sticky soils and provides a less aggressive option in lighter soil types.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "B7": 
      case "C7": 
      case "D7":
      case "E7": 
           image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
           demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. 
		   These chains are recommended where erosion from run off can be an issue.
		   If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. 
		   Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F7":
           document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "A8":
           document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "B8": 
      case "C8": 
	  div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "D8":
      case "E8": 
	   div1.style.display = "none";
           image.src = "/wp-content/uploads/30-CL1-CL1-900.png";
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F8":
		   image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
           demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. 
		   These chains are recommended where erosion from run off can be an issue.
		   If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. 
		   Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A9":
           document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "B9": 
      case "C9": 
      case "D9":
           div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "E9": 
	       div1.style.display = "none";
           image.src = "/wp-content/uploads/30-CL1-CL1-900.png";
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F9":
           image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
             demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. These chains are recommended where erosion from run off can be an issue. If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A10":
           image.src = "/wp-content/uploads/2016/01/30-CL1-W36-900.png";
           document.getElementById("demo").innerHTML = "Your best configuration option is CL1 Discs Front/W36 Discs rear";
           break;
      case "B10": 
      case "C10": 
      case "D10": 
            image.src = "/wp-content/uploads/2016/05/30-CL1-CL1-900-TR.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition. ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "E10": 
           image.src = "/wp-content/uploads/2016/01/30-CL1-W36-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2015/09/W36-disc-small.png";
           comboheading.innerHTML = "CL1/W36 Combination";
           demo.innerHTML = "Your best configuration option is CL1 Discs Front/W36 Discs rear";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F10":
           image.src = "/wp-content/uploads/2016/01/30-CL2-SD49-900.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
          comboheading.innerHTML = "CL2/SD49 Combination";
           demo.innerHTML = "The ultimate one pass combo for pre-seeding, weed kill and seedbed preparation in a wide range of residue. The CL2’s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles, while the SD49 chains will help break any clumps and remove stubborn weeds. Providing a perfect seedbed, the multi-directional spiked disc chains are flexible and can be swapped for a more or less aggressive action. Ideal in undulating grounds at risk of water run off and erosion, the SD49’s tend not to fine up the soil and help pin it to the hillside.  ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
      case "A11":
           document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "B11": 
      case "C11": 
      case "D11": 
      case "E11": 
	    div1.style.display = "none";
           image.src = "/wp-content/uploads/2016/05/30-CL2-CL1-900-TR.png";
           sideimage1.src = "/wp-content/uploads/2015/09/CL2-disc-small-1.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL2/CL1 Combination";
           demo.innerHTML = "The ideal combination for those farmers looking for an aggressive tillage of topsoil or the management of medium to heavy cereal residue. The CL2s on the front can bust up a heavily-crusted topsoil or lay down and begin to chop cereal stubbles. The dull edge of the CL1s on the rear helps to split a break open residue to promote breakdown and soil mixing, keeping the draft relatively light and leaving a magnificently level seedbed.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F11":
	  div1.style.display = "none";
           image.src = "/wp-content/uploads/30-CL1-CL1-900.png";
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "A12":
           document.getElementById("demo").innerHTML = invalidconfig;
           image.src = "";
           break;
      case "B12": 
      case "C12": 
      case "D12": 
      case "E12": 
           image.src = "/wp-content/uploads/2016/05/30-CL1-CL1-900-TR.png";
           div1.style.display = "none"; 
           sideimage1.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/CL1-disc-800.png";
           comboheading.innerHTML = "CL1/CL1 Combination";
           demo.innerHTML = "Our most popular combination of them all, the CL1’s provide excellent versatility. Use thiscombination in light to medium cereal residue post harvest, splitting and bruising the stalks and accelerating break down for trash-clearance pre seeding. At this time the chains stimulate a flush ofweed seed germination. Promoting early germination creates the opportunity to control weeds prior to crop establishment. Integrated weed management is the key to herbicide resistance management. Use the Kelly Diamond Harrow in conjunction with or instead of herbicide for a clean seedbed and reduced crop competition. ";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
      case "F12":
           image.src = "wp-content/uploads/30-SD49-SD49-900.png";
           div1.style.display = "none"; 
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           sideimage2.src = "/wp-content/uploads/2016/03/SD49-disc-800.png";
           comboheading.innerHTML = "SD49/SD49 Combination";
           demo.innerHTML = "Providing a perfect seedbed, the multi-directional chains are flexible and can be swapped for a more or less aggressive action. With the spikes in the trailing formation, the chains are self-cleaning. In areas that cultivation is common practice the SD49s are the ideal finishing tool. Light, fast and effective they provide excellent levelling and are the gentlest on soil. These chains are recommended where erosion from run off can be an issue. If you are familiar with Prickle Chains or the Philips Rotary Harrow you will instantly recognise the benefits of the Spiked Disc.  Having nearly 50 lb per foot, (70 kg/m) and 80 spikes per foot(240 spikes per metre) this harrow on steroids is versatile and effective. Use the Spiked Disc to level worked ground, incorporate herbicides and fertilisers, remove small weeds and even break down stubble.";
           demo1.innerHTML = "Adding another type of disc may make the machine more versatile. Please contact your local dealer or our office for further information";
           if (mediawidth.matches){
                machinesizemobile1.style.display='block';
                machinesizemobile2.style.display='block';
           }    
           else{  
                machinesize.style.display='block';
           }
           machinetypeheader.style.display='block';
           tryagain.style.display='initial';
           break;
       default:
            div1.style.display = "none";
       break;
}
switch (tractortype)
{

       case "1":
           hmodel.innerHTML = "20'/ 6m";
           hwwidth.innerHTML = "19.5'/6m";
           htwidth.innerHTML = "6.5’/2m";
           htheight.innerHTML = "11.5'/3.5m";
           htlength.innerHTML = "30’/9m";
           power.innerHTML = powerdisclaimer;
           break;
       case "2":
           hmodel.innerHTML = "30’/9m";
           hwwidth.innerHTML = "28.5’/8.6m";
           htwidth.innerHTML = "11.5’/3.5m";
           htheight.innerHTML = "13’/4m";
           htlength.innerHTML = "46’/14m";
           power.innerHTML = powerdisclaimer;
           break;
       case "3":
           hmodel.innerHTML = " 40’/12m";
           hwwidth.innerHTML = "41’/12.3m";
           htwidth.innerHTML = "11.5’/3.5m";
           htheight.innerHTML = "12’/3.7m";
           htlength.innerHTML = "53’/16m";
           power.innerHTML = powerdisclaimer;
           break;
        case "4":
           hmodel.innerHTML = "45’/13.5m";
           hwwidth.innerHTML = "43.5’/13.5m";
           htwidth.innerHTML = "13.5’/4.1m";
           htheight.innerHTML = "13’/3.9m";
           htlength.innerHTML = "55’/16.7m";
           power.innerHTML = powerdisclaimer;   
           break; 
        case "5":
           hmodel.innerHTML = "50’/15m";
           hwwidth.innerHTML = "48.5’/14.8m";
           htwidth.innerHTML = "17’/5.2m";
           htheight.innerHTML = "15’/3.5m";
           htlength.innerHTML = "62’/19m"; 
           power.innerHTML = powerdisclaimer;
           break;
        case "6":
           hmodel.innerHTML = "62’HDX";
           hwwidth.innerHTML = "62’/18.3m";
           htwidth.innerHTML = "16.3'/5m";
           htheight.innerHTML = "14.6’/4.5m";
           htlength.innerHTML = "72’/22m"; 
           power.innerHTML = powerdisclaimer;
           break;
}
}

function reset_chain_type()
{
      var image = document.getElementById('myImage');
      var sideimage1 = document.getElementById('SideImage1');
      var sideimage2 = document.getElementById('SideImage2');

      var div1 = document.getElementById("selector");
      var demo = document.getElementById("demo");
      var demo1 = document.getElementById("demo1");
      var tryagain = document.getElementById("tryagain");
      var comboheading = document.getElementById("combo");
      var machinesize = document.getElementById("machine-size");
      var machinetypeheader = document.getElementById("machinetypeheader");
	  var machinesizemobile1 = document.getElementById("machine-size-mobile-1");
      var machinesizemobile2 = document.getElementById("machine-size-mobile-2");
      var power = document.getElementById("power");

      var hmodel = document.getElementById("h-model");
      var hwwidth = document.getElementById("h-w-width");
      var htwidth = document.getElementById("h-t-width");
      var htheight = document.getElementById("h-t-height");
      var htlength = document.getElementById("h-t-length");


      div1.style.display = "initial";
      image.src = "/wp-content/uploads/2016/04/30-CL1-CL1-900-NB.png";
      sideimage1.src = "";
      sideimage2.src = "";
      demo.innerHTML = "";
      power.innerHTML = "";
      demo1.style.display = "none";
      tryagain.style.display = "none";
      comboheading.innerHTML = "";
      machinetypeheader.style.display = "none";
      machinesizemobile1.style.display = "none";
      machinesizemobile2.style.display = "none";
      machinesize.style.display = "none";
    

      hmodel.innerHTML = "";
      hwwidth.innerHTML = "";
      htwidth.innerHTML = "";
      htheight.innerHTML = "";
      htlength.innerHTML = ""; 
       
}
