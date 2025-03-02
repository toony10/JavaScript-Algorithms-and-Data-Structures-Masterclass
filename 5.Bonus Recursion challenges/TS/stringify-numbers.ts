// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
function stringifyNumbers(obj: Record<string, any>): Record<string, any>
{
  let newObj: Record<string, any> = {};

  for (let key in obj)
  {
    if (typeof obj[key] === "number")
    {
      newObj[key] = obj[key].toString(); // تحويل الرقم إلى نص
    } else if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key]))
    {
      newObj[key] = stringifyNumbers(obj[key]); // استدعاء تكراري للكائنات المتداخلة
    } else
    {
      newObj[key] = obj[key]; // الاحتفاظ بالقيم الأخرى كما هي
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
