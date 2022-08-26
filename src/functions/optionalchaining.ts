namespace Functions {

    export const obj = JSON.parse(JSON.stringify({
        Employee : {
            FullName: "abc",
            PhoneNumber: 123456,
            Address : {
                HouseNo:1
            },
            Manager : {
                FullName: "efg",
                PhoneNumber: 4567,
            }
        }
    }));

//undefined 
// 0
// null
// ''

    export let street: string = obj?.Employee?.Address?.Street ?? 'street1';
    //console.log(obj.Employee.Add.HouseNo);
    //console.log("oc :",obj?.Employee?.Add?.HouseNo);
    console.log(street);

}