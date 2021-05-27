// 2.4.1 Code la vie

const code = [
  { ARN: 'UCU', AA: "Sérine" },
  { ARN: 'UCC', AA: "Sérine" },
  { ARN: 'UCA', AA: "Sérine" },
  { ARN: 'UCG', AA: "Sérine" },
  { ARN: 'AGU', AA: "Sérine" },
  { ARN: 'AGC', AA: "Sérine" },
  { ARN: 'CCU', AA: "Proline" },
  { ARN: 'CCC', AA: "Proline" },
  { ARN: 'CCA', AA: "Proline" },
  { ARN: 'CCG', AA: "Proline" },
  { ARN: 'UUA', AA: "Leucine" },
  { ARN: 'UUG', AA: "Leucine" },
  { ARN: 'UUU', AA: "Phénylalanine" },
  { ARN: 'UUC', AA: "Phénylalanine" },
  { ARN: 'CGU', AA: "Arginine" },
  { ARN: 'CGC', AA: "Arginine" },
  { ARN: 'CGA', AA: "Arginine" },
  { ARN: 'CGG', AA: "Arginine" },
  { ARN: 'AGA', AA: "Arginine" },
  { ARN: 'AGG', AA: "Arginine" },
  { ARN: 'UAU', AA: "Tyrosine" },
  { ARN: 'UAC', AA: "Tyrosine" },
];

let arn_1 = "UUACGCAGUAGA"
let arn_2 = "CCGUCGUUGCGCUACAGC";
let arn_3 = "CCUCGCCGGUACUUCUCG";


function convertSequenceInntoArray(sequence) {
  arr = [];
  for (let i = 0; i <=sequence.length-1; i+=3) {
    arr.push(sequence.slice(i, i+3));
  }
  return arr;
}


function ConversionARN_AA(keys) {
  arr = []

  keys.forEach(seq => {
    code.forEach(code_hash => {
      if(code_hash.ARN == seq) {
        arr.push(code_hash.AA)
      }
    });
  });
  return arr
}

function decode (string_seq) {
  let keys = convertSequenceInntoArray(string_seq);
  let conversions = ConversionARN_AA(keys);

  console.log(conversions.join('-'));
}



console.log("Sequence 1");
decode(arn_1)

console.log("");

console.log("Sequence 2");
decode(arn_2)

console.log("");

console.log("Sequence 3");
decode(arn_3)