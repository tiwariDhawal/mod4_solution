var n=new Array();
n[0]="Yaakov";
n[1]="John";
n[2]="Jen";
n[3]="jason";
n[4]="paul";
n[5]="frank";
n[6]="larry";
n[7]="paula";
n[8]="laura";
n[9]="jim";


for (var i = 0; i < n.length; i++) {
	if(n[i].charAt(0)==='J'|| n[i].charAt(0)==='j'){
        console.log("Goodbye "+ n[i])
	}
	else{
		console.log("Hello "+ n[i])
	}
}