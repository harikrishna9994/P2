
 let value: number | string = 10;
 console.log(value);
 value = "Giri";
 console.log(value);

let marks: number[] = [80, 90, 100];
console.log(`marks:${marks}`);

let users: string[] = ["Giri", "Sam"];
console.log(users);

let giriTuple: [string, number?] = 10 as any;
console.log(giriTuple);

let giriProfile = {
  name: "Giri",
  address: { city: "Chennai", pincode: 600028 }
};
console.log(giriProfile);
