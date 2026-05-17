const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let sum=0;
    let temp=[];
    let result=[];
	arr.forEach((ele,i)=>{
		if(ele+sum<=n){
			temp.push(ele);
			sum+=ele;
		}
		else{
			result.push(temp);
			temp=ele;
			sum=ele;
		}
	});
	if(temp.length>0){
		result.push(temp);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
