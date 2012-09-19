/*
 * Shaun Hare
 */
var htmlTag= document.getElementsByTagName("html");
var ip=(htmlTag[0].getAttribute('data-remoteIP'));
lookupIP(ip);
function lookupIP(ip){
	
	var hosts=[
		{ip:"128.243.42.160",name:"portalapp1.nottingham.ac.uk"},
		{ip:"128.243.42.161",name: "portalapp2.nottingham.ac.uk"},
		{ip:"128.243.42.162",name: "portalapp3.nottingham.ac.uk"},
		{ip:"128.243.42.242",name: "portalapp4.nottingham.ac.uk"},
		{ip:"128.243.42.235",name: "portalapp5.nottingham.ac.uk"},
		{ip:"128.243.42.236",name: "portalapp6.nottingham.ac.uk"},
		{ip:"128.243.42.237",name: "portalapp7.nottingham.ac.uk"},
		{ip:"128.243.42.238",name: "portalapp8.nottingham.ac.uk"},
		{ip:"128.243.42.239",name: "portalapp9.nottingham.ac.uk"},
		{ip:"128.243.42.240",name: "portalapp10.nottingham.ac.uk"}
		
	];
	
	for(var host in hosts)
	{
		if(ip==hosts[host].ip)
		{
		
		console.log(hosts[host].name);
			 
		}
	
	}
	
	
	
}