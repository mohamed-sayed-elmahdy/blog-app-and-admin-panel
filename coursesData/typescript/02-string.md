# 🇪🇬 النسخة العربية

# `string` في TypeScript

## 🎯 Learning Objectives

بعد الانتهاء من هذا الدرس، ستكون قادرًا على:

* فهم ما هو `string` ولماذا يُستخدم.
* كتابة `string` باستخدام `Type Annotation`.
* معرفة الطرق المختلفة لكتابة النصوص في JavaScript وTypeScript.
* استخدام `Template Literals` وString Interpolation.
* استخدام بعض أشهر خصائص ودوال `string`.
* فهم `Type Inference` عند التعامل مع النصوص.
* التمييز بين `string` و`String`.
* معرفة بعض أفضل الممارسات عند التعامل مع النصوص.

---

## 📖 Explanation

### ما هو `string`؟

`string` هو أحد الـ **Primitive Types** الأساسية في JavaScript وTypeScript، ويُستخدم لتمثيل وتخزين النصوص.

في JavaScript يمكنك إنشاء متغير يحتوي على نص بدون تحديد نوعه بشكل صريح:

```js
let name = "Mohamed";
```

أما في TypeScript، يمكنك تحديد النوع باستخدام `Type Annotation`:

```ts
let name: string = "Mohamed";
```

هنا أنت تقول لـ TypeScript إن المتغير `name` يجب أن يحتوي على قيمة من نوع `string`.

لذلك هذا صحيح:

```ts
let name: string = "Mohamed";
```

بينما هذا غير صحيح:

```ts
let name: string = 10;
```

لأن `10` من نوع `number` وليس `string`.

---

### أمثلة على `string`

```ts
let firstName: string = "Mohamed";

let city: string = "Cairo";

let message: string = "Hello World";
```

كل القيم السابقة Strings لأنها تمثل نصوصًا.

يمكن أن يحتوي الـ `string` على:

* حروف.
* كلمات.
* جمل.
* أرقام مكتوبة كنص.
* رموز وعلامات خاصة.

مثلًا:

```ts
let username: string = "Mohamed123";

let phone: string = "01012345678";

let symbol: string = "@";
```

> لاحظ أن `"01012345678"` ما زال `string` رغم أنه يحتوي على أرقام، لأن القيمة محاطة بعلامات اقتباس.

---

### أنواع كتابة الـ String

في JavaScript وTypeScript توجد ثلاث طرق شائعة لكتابة النصوص.

#### 1. Double Quotes

باستخدام `"`:

```ts
let name: string = "Mohamed";
```

#### 2. Single Quotes

باستخدام `'`:

```ts
let name: string = 'Mohamed';
```

#### 3. Template Literals

باستخدام Backticks `` ` ``:

```ts
let name: string = `Mohamed`;
```

الطرق الثلاثة تنتج قيمة من نوع `string`.

---

### Template Literals

`Template Literals` مهمة جدًا في JavaScript وTypeScript، خصوصًا عندما تحتاج إلى وضع قيم متغيرات داخل نص.

بدل استخدام concatenation:

```ts
let firstName: string = "Mohamed";

let message: string = "Hello " + firstName;
```

يمكنك استخدام `Template Literal`:

```ts
let firstName: string = "Mohamed";

let message: string = `Hello ${firstName}`;
```

الناتج:

```text
Hello Mohamed
```

الجزء:

```ts
${firstName}
```

يسمى **Interpolation**، ويسمح لك بإدخال قيمة داخل الـ Template Literal.

يمكنك أيضًا إدخال أكثر من قيمة:

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";

let message: string = `Hello ${firstName}, welcome to ${city}.`;
```

الناتج:

```text
Hello Mohamed, welcome to Cairo.
```

---

### استدعاء String Methods

عندما يعرف TypeScript أن المتغير من نوع `string`، فإنه يستطيع التحقق من العمليات التي تُجرى عليه وتوفير معلومات TypeScript المناسبة أثناء الكتابة.

مثلًا:

```ts
let name: string = "Mohamed";

console.log(name.toUpperCase());
```

الناتج:

```text
MOHAMED
```

يمكنك استخدام العديد من الـ Methods والخصائص الموجودة على Strings.

---

### `toUpperCase()`

تحول الأحرف إلى Uppercase:

```ts
let text: string = "hello";

console.log(text.toUpperCase());
```

الناتج:

```text
HELLO
```

---

### `toLowerCase()`

تحول الأحرف إلى Lowercase:

```ts
let text: string = "HELLO";

console.log(text.toLowerCase());
```

الناتج:

```text
hello
```

---

### `length`

`length` ليست Method، وإنما Property تُرجع عدد الـ UTF-16 code units الموجودة في الـ String.

في الحالات البسيطة:

```ts
let text: string = "Mohamed";

console.log(text.length);
```

الناتج:

```text
7
```

> في أغلب النصوص الإنجليزية البسيطة ستتطابق `length` مع عدد الأحرف التي تراها، لكن Unicode يحتوي على حالات يمكن فيها ألا تكون `length` مساوية تمامًا لعدد الرموز المرئية.

---

### `includes()`

تتحقق مما إذا كان String يحتوي على نص معين.

```ts
let text: string = "TypeScript";

console.log(text.includes("Script"));
```

الناتج:

```text
true
```

وإذا لم يجد النص:

```ts
let text: string = "TypeScript";

console.log(text.includes("Java"));
```

الناتج:

```text
false
```

---

### Type Inference

في TypeScript، غالبًا لا تحتاج إلى كتابة الـ Type بشكل صريح عندما يستطيع TypeScript استنتاجه من القيمة.

بدل:

```ts
let name: string = "Mohamed";
```

يمكنك كتابة:

```ts
let name = "Mohamed";
```

TypeScript يستطيع استنتاج أن:

```ts
name: string
```

وهذا يسمى:

**Type Inference**

بالتالي، عند محاولة وضع `number` في هذا المتغير:

```ts
let name = "Mohamed";

name = 25;
```

سيعطي TypeScript خطأ، لأنه استنتج أن `name` من نوع `string`.

> `Type Inference` لا يعني أن المتغير يمكنه تغيير نوعه تلقائيًا. بل يعني أن TypeScript يستنتج الـ Type المناسب من السياق.

---

### `string` vs `String`

من المهم التمييز بين:

```ts
string
```

و:

```ts
String
```

#### `string`

هذا هو الـ **Primitive Type** الخاص بالنصوص:

```ts
let name: string = "Mohamed";
```

وهذا هو النوع الذي يجب استخدامه في TypeScript عند وصف النصوص.

#### `String`

`String` بحرف `S` كبير يشير إلى الـ boxed object type المرتبط بالـ primitive string.

```ts
let name: String = "Mohamed";
```

قد يعمل في بعض الحالات، لكنه ليس الاختيار المناسب عادةً عند كتابة Types في TypeScript.

لذلك القاعدة العملية:

> استخدم `string` بحرف صغير، وليس `String` بحرف كبير.

ونفس الفكرة تنطبق على أنواع الـ Primitive الأخرى مثل:

```ts
string
number
boolean
```

بدل الأنواع ذات الحروف الكبيرة:

```ts
String
Number
Boolean
```

---

### `string` كـ Primitive Type

`string` واحد من الـ Primitive Types الأساسية في JavaScript.

ومن أمثلة الـ Primitive Types:

```ts
string
number
boolean
null
undefined
bigint
symbol
```

كل نوع له استخدامه الخاص.

في هذا الدرس، التركيز الأساسي هو على `string` وتمثيل النصوص.

---

## 💻 Practical Examples

### 🟢 Basic — تعريف String

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let message: string = "Hello World";
```

كل المتغيرات السابقة تحتوي على قيم من نوع `string`.

---

### 🟡 Intermediate — استخدام Template Literal

```ts
let firstName: string = "Mohamed";
let age: number = 25;

let message: string = `My name is ${firstName} and I am ${age} years old.`;

console.log(message);
```

الناتج:

```text
My name is Mohamed and I am 25 years old.
```

هنا استخدمنا `Template Literal` لإدخال قيم المتغيرات داخل النص.

---

### 🔴 Advanced — الجمع بين String Methods

```ts
let username: string = "mohamed";

let formattedUsername = username.toUpperCase();

console.log(`Welcome, ${formattedUsername}!`);
console.log(`Username length: ${username.length}`);
console.log(`Has admin: ${username.includes("admin")}`);
```

الناتج:

```text
Welcome, MOHAMED!
Username length: 7
Has admin: false
```

المثال يجمع بين:

* `toUpperCase()`
* `length`
* `includes()`
* `Template Literals`

---

## 🌍 Real World Examples

### User Interface Message

في تطبيق Frontend قد تحتاج إلى إنشاء رسالة للمستخدم باستخدام بيانات موجودة في Variables:

```ts
let firstName: string = "Mohamed";
let notificationCount: number = 3;

let message = `Hello ${firstName}, you have ${notificationCount} new notifications.`;

console.log(message);
```

الناتج:

```text
Hello Mohamed, you have 3 new notifications.
```

هذا النوع من الاستخدام شائع في:

* Dashboards.
* صفحات المستخدمين.
* Notifications.
* رسائل الـ UI.
* صفحات الـ Profile.

---

### API Data

عند التعامل مع بيانات قادمة من API، قد تحتوي البيانات على Strings مثل اسم المستخدم أو البريد الإلكتروني:

```ts
let username: string = "Mohamed";
let email: string = "mohamed@example.com";

console.log(`User: ${username}`);
console.log(`Email: ${email}`);
```

هنا يساعد TypeScript في التعبير بوضوح عن أن هذه القيم Strings.

---

### Search

في تطبيق يحتوي على Search Input، قد تحتاج إلى التحقق من وجود كلمة داخل نص:

```ts
let searchQuery: string = "typescript";

console.log(searchQuery.includes("type"));
```

الناتج:

```text
true
```

يمكن استخدام عمليات String مشابهة في Search Features وFiltering وغيرها من أجزاء التطبيقات.

---

## 💡 Best Practices

* استخدم `string` بحرف صغير عند كتابة Type Annotation:

  ```ts
  let name: string = "Mohamed";
  ```

* لا تكتب Type Annotation عندما يكون TypeScript قادرًا على استنتاج النوع بوضوح، إلا إذا كان هناك سبب تعليمي أو تصميمي يستدعي ذلك:

  ```ts
  let name = "Mohamed";
  ```

* استخدم `Template Literals` عندما تحتاج إلى إدخال Variables داخل النص:

  ```ts
  let message = `Hello ${name}`;
  ```

* لا تستخدم `String` بحرف كبير كنوع للـ Primitive Strings في الكود المعتاد.

* اختر أسلوب الاقتباس المتوافق مع Coding Style الخاص بالمشروع، سواء كان Single Quotes أو Double Quotes.

---

## ⚠️ Common Mistakes

### استخدام `number` بدل `string`

❌ Incorrect:

```ts
let phone: string = 01012345678;
```

القيمة هنا Number وليست String.

✅ Better:

```ts
let phone: string = "01012345678";
```

وهذا مناسب خصوصًا للـ Phone Numbers التي لا تحتاج إلى عمليات حسابية.

---

### استخدام `String` بدل `string`

❌ Avoid:

```ts
let name: String = "Mohamed";
```

✅ Better:

```ts
let name: string = "Mohamed";
```

`string` هو الـ Primitive Type المناسب.

---

### الاعتقاد أن `Type Inference` يجعل المتغير يقبل أي Type

❌ Incorrect:

```ts
let name = "Mohamed";

name = 25;
```

TypeScript استنتج أن `name` من نوع `string`، لذلك لا يمكن إسناد `number` إليه.

✅ Correct:

```ts
let name = "Mohamed";

name = "Ahmed";
```

هنا القيمة الجديدة ما زالت `string`.

---

### استخدام String Concatenation عندما يكون Template Literal أوضح

يمكن أن يعمل هذا:

```ts
let firstName = "Mohamed";
let message = "Hello " + firstName;
```

لكن عندما يحتوي النص على عدة Variables، غالبًا يكون Template Literal أكثر وضوحًا:

```ts
let firstName = "Mohamed";
let city = "Cairo";

let message = `Hello ${firstName} from ${city}.`;
```

---

## 📊 Comparison

### `string` vs `String`

| Feature                             | `string` | `String` |
| ----------------------------------- | -------- | -------- |
| Primitive Type                      | ✅        | ❌        |
| النوع المفضل لتمثيل النصوص          | ✅        | ❌        |
| مناسب للـ Type Annotations المعتادة | ✅        | ⚠️       |
| يمثل Primitive String               | ✅        | ❌        |
| يجب استخدامه في TypeScript بشكل عام | ✅        | ❌        |

> في TypeScript، استخدم `string` عند التعامل مع Primitive Strings.

---

## 🧠 Pro Tip

لا تفترض أن كل قيمة تحتوي على أرقام يجب أن تكون `number`.

فكر في **كيفية استخدام القيمة**.

مثلًا:

```ts
let age: number = 25;
```

العمر رقم لأننا قد نحتاج إلى إجراء عمليات حسابية عليه.

أما:

```ts
let phone: string = "01012345678";
```

فرقم الهاتف يُعامل عادةً كـ `string` لأنه Identifier وليس قيمة نحتاج إلى حسابها.

ونفس الفكرة يمكن تطبيقها على:

```ts
let postalCode: string = "01000";
let productCode: string = "12345";
```

اختيار الـ Type يعتمد على معنى البيانات واستخدامها، وليس فقط على شكلها.

---

## 📝 Summary

* `string` هو Primitive Type يُستخدم لتمثيل النصوص.
* يمكن كتابة Strings باستخدام:

  * Double Quotes `" "`
  * Single Quotes `' '`
  * Template Literals `` ` ``
* `Template Literals` تسمح بإدخال Variables باستخدام `${}`.
* من أشهر String Methods والخصائص:

  * `toUpperCase()`
  * `toLowerCase()`
  * `length`
  * `includes()`
* TypeScript يستطيع غالبًا استنتاج أن القيمة `string` باستخدام `Type Inference`.
* استخدم `string` بحرف صغير بدل `String`.
* ليس كل شيء يبدو كرقم يجب أن يكون `number`؛ بعض القيم مثل Phone Numbers وProduct Codes تكون Strings لأنها تُستخدم كبيانات نصية أو Identifiers.

---

## 🧪 Exercises

### 🟢 Easy

أنشئ ثلاثة Variables:

* `firstName` من نوع `string`.
* `city` من نوع `string`.
* `message` من نوع `string`.

ثم اجعل `message` تحتوي على جملة تستخدم `firstName` و`city` باستخدام `Template Literal`.

---

### 🟡 Medium

لديك:

```ts
let username: string = "mohamed";
```

اكتب كود يقوم بـ:

1. تحويل الاسم إلى Uppercase.
2. طباعة عدد الأحرف الموجودة في الاسم.
3. التحقق مما إذا كان الاسم يحتوي على `"med"`.

---

### 🔴 Hard

أنشئ:

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let username: string = "mohamed123";
```

ثم أنشئ `message` باستخدام `Template Literal` بحيث تكون النتيجة:

```text
Hello Mohamed! You are from Cairo. Your username has 9 characters and contains "123": true
```

استخدم فقط المفاهيم التي تعلمتها في هذا الدرس.

---

## ✅ Solutions

### 🟢 Easy

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";

let message: string = `Hello ${firstName} from ${city}.`;

console.log(message);
```

الناتج:

```text
Hello Mohamed from Cairo.
```

استخدمنا `Template Literal` لإدخال قيم `firstName` و`city` داخل `message`.

---

### 🟡 Medium

```ts
let username: string = "mohamed";

console.log(username.toUpperCase());
console.log(username.length);
console.log(username.includes("med"));
```

الناتج:

```text
MOHAMED
7
true
```

* `toUpperCase()` تحول النص إلى Uppercase.
* `length` تعطي عدد الـ UTF-16 code units في الـ String.
* `includes()` تتحقق من وجود النص المطلوب.

---

### 🔴 Hard

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let username: string = "mohamed123";

let message: string = `Hello ${firstName}! You are from ${city}. Your username has ${username.length} characters and contains "123": ${username.includes("123")}`;

console.log(message);
```

الناتج:

```text
Hello Mohamed! You are from Cairo. Your username has 9 characters and contains "123": true
```

استخدمنا هنا:

* `Template Literal`
* String Interpolation
* `length`
* `includes()`

وكلها مفاهيم تم شرحها في الدرس.

---

## 🔗 Related Lessons

### Previous / Prerequisite Lessons

* Primitive Types in TypeScript
* Type Annotations

### Next / Recommended Lessons

* `number` Type
* `boolean` Type
* Type Inference

### Related Lessons

* JavaScript Strings
* Template Literals
* TypeScript Type System

---

# 🇺🇸 English Version

# `string` in TypeScript

## 🎯 Learning Objectives

After completing this lesson, you will be able to:

* Understand what `string` is and why it is used.
* Write `string` values using `Type Annotation`.
* Understand the different ways to write strings in JavaScript and TypeScript.
* Use `Template Literals` and String Interpolation.
* Use common `string` properties and methods.
* Understand `Type Inference` when working with strings.
* Distinguish between `string` and `String`.
* Follow common best practices when working with strings.

---

## 📖 Explanation

### What is `string`?

`string` is one of the fundamental **Primitive Types** in JavaScript and TypeScript. It is used to represent and store text.

In JavaScript, you can create a variable containing text without explicitly specifying its type:

```js
let name = "Mohamed";
```

In TypeScript, you can explicitly specify the type using a `Type Annotation`:

```ts
let name: string = "Mohamed";
```

Here, you are telling TypeScript that the variable `name` must contain a value of type `string`.

Therefore, this is valid:

```ts
let name: string = "Mohamed";
```

While this is invalid:

```ts
let name: string = 10;
```

because `10` is a `number`, not a `string`.

---

### String Examples

```ts
let firstName: string = "Mohamed";

let city: string = "Cairo";

let message: string = "Hello World";
```

All of these values are Strings because they represent text.

A `string` can contain:

* Letters.
* Words.
* Sentences.
* Numbers represented as text.
* Symbols and special characters.

For example:

```ts
let username: string = "Mohamed123";

let phone: string = "01012345678";

let symbol: string = "@";
```

> Notice that `"01012345678"` is still a `string` even though it contains digits, because the value is enclosed in quotes.

---

### Ways to Write a String

There are three common ways to write strings in JavaScript and TypeScript.

#### 1. Double Quotes

Using `"`:

```ts
let name: string = "Mohamed";
```

#### 2. Single Quotes

Using `'`:

```ts
let name: string = 'Mohamed';
```

#### 3. Template Literals

Using Backticks `` ` ``:

```ts
let name: string = `Mohamed`;
```

All three produce a value of type `string`.

---

### Template Literals

`Template Literals` are extremely useful in JavaScript and TypeScript, especially when you need to insert variable values into text.

Instead of using concatenation:

```ts
let firstName: string = "Mohamed";

let message: string = "Hello " + firstName;
```

you can use a `Template Literal`:

```ts
let firstName: string = "Mohamed";

let message: string = `Hello ${firstName}`;
```

The result is:

```text
Hello Mohamed
```

The part:

```ts
${firstName}
```

is called **Interpolation**, and it allows you to insert a value into a Template Literal.

You can also insert multiple values:

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";

let message: string = `Hello ${firstName}, welcome to ${city}.`;
```

The result is:

```text
Hello Mohamed, welcome to Cairo.
```

---

### Calling String Methods

When TypeScript knows that a variable is a `string`, it can type-check operations performed on that value and provide the appropriate TypeScript information while you write code.

For example:

```ts
let name: string = "Mohamed";

console.log(name.toUpperCase());
```

The result is:

```text
MOHAMED
```

Strings have many useful methods and properties.

---

### `toUpperCase()`

Converts characters to uppercase:

```ts
let text: string = "hello";

console.log(text.toUpperCase());
```

The result is:

```text
HELLO
```

---

### `toLowerCase()`

Converts characters to lowercase:

```ts
let text: string = "HELLO";

console.log(text.toLowerCase());
```

The result is:

```text
hello
```

---

### `length`

`length` is a property, not a method. It returns the number of UTF-16 code units in the String.

For simple text:

```ts
let text: string = "Mohamed";

console.log(text.length);
```

The result is:

```text
7
```

> For most simple English text, `length` matches the number of visible characters. However, Unicode contains cases where `length` does not exactly equal the number of visible symbols.

---

### `includes()`

Checks whether a String contains a specific piece of text.

```ts
let text: string = "TypeScript";

console.log(text.includes("Script"));
```

The result is:

```text
true
```

If the text is not found:

```ts
let text: string = "TypeScript";

console.log(text.includes("Java"));
```

The result is:

```text
false
```

---

### Type Inference

In TypeScript, you often do not need to explicitly write a Type when TypeScript can infer it from the value.

Instead of:

```ts
let name: string = "Mohamed";
```

you can write:

```ts
let name = "Mohamed";
```

TypeScript can infer that:

```ts
name: string
```

This is called:

**Type Inference**

Therefore, if you try to assign a `number` to this variable:

```ts
let name = "Mohamed";

name = 25;
```

TypeScript will report an error because it inferred that `name` is a `string`.

> `Type Inference` does not mean that the variable can automatically change its type. It means that TypeScript determines the appropriate Type from the available context.

---

### `string` vs `String`

It is important to distinguish between:

```ts
string
```

and:

```ts
String
```

#### `string`

This is the **Primitive Type** used for strings:

```ts
let name: string = "Mohamed";
```

This is the type you should normally use in TypeScript when describing strings.

#### `String`

`String` with a capital `S` refers to the boxed object type associated with the primitive string.

```ts
let name: String = "Mohamed";
```

Although this can work in some situations, it is generally not the appropriate choice when writing Types in TypeScript.

Therefore, the practical rule is:

> Use lowercase `string`, not uppercase `String`.

The same general principle applies to other Primitive Types such as:

```ts
string
number
boolean
```

rather than their uppercase counterparts:

```ts
String
Number
Boolean
```

---

### `string` as a Primitive Type

`string` is one of the fundamental Primitive Types in JavaScript.

Examples of Primitive Types include:

```ts
string
number
boolean
null
undefined
bigint
symbol
```

Each type has its own purpose.

In this lesson, the main focus is `string` and how it represents text.

---

## 💻 Practical Examples

### 🟢 Basic — Defining Strings

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let message: string = "Hello World";
```

All of these variables contain values of type `string`.

---

### 🟡 Intermediate — Using a Template Literal

```ts
let firstName: string = "Mohamed";
let age: number = 25;

let message: string = `My name is ${firstName} and I am ${age} years old.`;

console.log(message);
```

The result is:

```text
My name is Mohamed and I am 25 years old.
```

Here, we used a `Template Literal` to insert variable values into the text.

---

### 🔴 Advanced — Combining String Methods

```ts
let username: string = "mohamed";

let formattedUsername = username.toUpperCase();

console.log(`Welcome, ${formattedUsername}!`);
console.log(`Username length: ${username.length}`);
console.log(`Has admin: ${username.includes("admin")}`);
```

The result is:

```text
Welcome, MOHAMED!
Username length: 7
Has admin: false
```

This example combines:

* `toUpperCase()`
* `length`
* `includes()`
* `Template Literals`

---

## 🌍 Real World Examples

### User Interface Message

In a Frontend application, you may need to create a message for a user using data stored in Variables:

```ts
let firstName: string = "Mohamed";
let notificationCount: number = 3;

let message = `Hello ${firstName}, you have ${notificationCount} new notifications.`;

console.log(message);
```

The result is:

```text
Hello Mohamed, you have 3 new notifications.
```

This kind of usage is common in:

* Dashboards.
* User pages.
* Notifications.
* UI messages.
* Profile pages.

---

### API Data

When working with data received from an API, the data may contain Strings such as usernames or email addresses:

```ts
let username: string = "Mohamed";
let email: string = "mohamed@example.com";

console.log(`User: ${username}`);
console.log(`Email: ${email}`);
```

TypeScript allows you to clearly express that these values are Strings.

---

### Search

In an application with a Search Input, you may need to check whether a query contains specific text:

```ts
let searchQuery: string = "typescript";

console.log(searchQuery.includes("type"));
```

The result is:

```text
true
```

Similar String operations can be useful in Search Features, Filtering, and other parts of an application.

---

## 💡 Best Practices

* Use lowercase `string` when writing a Type Annotation:

  ```ts
  let name: string = "Mohamed";
  ```

* Do not explicitly write a Type when TypeScript can infer it clearly, unless there is a specific educational or design reason to do so:

  ```ts
  let name = "Mohamed";
  ```

* Use `Template Literals` when you need to insert Variables into text:

  ```ts
  let message = `Hello ${name}`;
  ```

* Do not use uppercase `String` as the normal type for primitive strings.

* Follow the project's Coding Style when choosing between Single Quotes and Double Quotes.

---

## ⚠️ Common Mistakes

### Using a `number` Instead of a `string`

❌ Incorrect:

```ts
let phone: string = 01012345678;
```

The value here is a Number, not a String.

✅ Better:

```ts
let phone: string = "01012345678";
```

This is appropriate for Phone Numbers because they are generally treated as identifiers rather than values used for mathematical operations.

---

### Using `String` Instead of `string`

❌ Avoid:

```ts
let name: String = "Mohamed";
```

✅ Better:

```ts
let name: string = "Mohamed";
```

`string` is the appropriate Primitive Type.

---

### Assuming Type Inference Makes a Variable Accept Any Type

❌ Incorrect:

```ts
let name = "Mohamed";

name = 25;
```

TypeScript inferred that `name` is a `string`, so a `number` cannot be assigned to it.

✅ Correct:

```ts
let name = "Mohamed";

name = "Ahmed";
```

The new value is still a `string`.

---

### Using String Concatenation When a Template Literal Is Clearer

This works:

```ts
let firstName = "Mohamed";
let message = "Hello " + firstName;
```

However, when text contains multiple Variables, a Template Literal is often clearer:

```ts
let firstName = "Mohamed";
let city = "Cairo";

let message = `Hello ${firstName} from ${city}.`;
```

---

## 📊 Comparison

### `string` vs `String`

| Feature                                 | `string` | `String` |
| --------------------------------------- | -------- | -------- |
| Primitive Type                          | ✅        | ❌        |
| Preferred type for representing strings | ✅        | ❌        |
| Appropriate for normal Type Annotations | ✅        | ⚠️       |
| Represents a Primitive String           | ✅        | ❌        |
| Should generally be used in TypeScript  | ✅        | ❌        |

> In TypeScript, use `string` when working with Primitive Strings.

---

## 🧠 Pro Tip

Do not assume that every value containing digits should be a `number`.

Think about **how the value is used**.

For example:

```ts
let age: number = 25;
```

Age is a Number because mathematical operations may be performed on it.

But:

```ts
let phone: string = "01012345678";
```

A phone number is generally treated as a `string` because it is an identifier rather than a value used for calculations.

The same idea can apply to:

```ts
let postalCode: string = "01000";
let productCode: string = "12345";
```

The appropriate Type depends on the meaning and intended use of the data, not simply on how the value looks.

---

## 📝 Summary

* `string` is a Primitive Type used to represent text.
* Strings can be written using:

  * Double Quotes `" "`
  * Single Quotes `' '`
  * Template Literals `` ` ``
* `Template Literals` allow you to insert Variables using `${}`.
* Common String methods and properties include:

  * `toUpperCase()`
  * `toLowerCase()`
  * `length`
  * `includes()`
* TypeScript can often infer that a value is a `string` using `Type Inference`.
* Use lowercase `string` instead of uppercase `String`.
* Not everything that looks like a number should be a `number`; values such as Phone Numbers and Product Codes can be Strings because they are used as text or identifiers.

---

## 🧪 Exercises

### 🟢 Easy

Create three Variables:

* `firstName` of type `string`.
* `city` of type `string`.
* `message` of type `string`.

Then make `message` contain a sentence using `firstName` and `city` with a `Template Literal`.

---

### 🟡 Medium

Given:

```ts
let username: string = "mohamed";
```

Write code that:

1. Converts the username to Uppercase.
2. Prints the number of characters in the username.
3. Checks whether the username contains `"med"`.

---

### 🔴 Hard

Create:

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let username: string = "mohamed123";
```

Then create a `message` using a `Template Literal` so that the result is:

```text
Hello Mohamed! You are from Cairo. Your username has 9 characters and contains "123": true
```

Use only the concepts covered in this lesson.

---

## ✅ Solutions

### 🟢 Easy

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";

let message: string = `Hello ${firstName} from ${city}.`;

console.log(message);
```

The result is:

```text
Hello Mohamed from Cairo.
```

We used a `Template Literal` to insert the values of `firstName` and `city` into `message`.

---

### 🟡 Medium

```ts
let username: string = "mohamed";

console.log(username.toUpperCase());
console.log(username.length);
console.log(username.includes("med"));
```

The result is:

```text
MOHAMED
7
true
```

* `toUpperCase()` converts the text to Uppercase.
* `length` returns the number of UTF-16 code units in the String.
* `includes()` checks whether the specified text exists.

---

### 🔴 Hard

```ts
let firstName: string = "Mohamed";
let city: string = "Cairo";
let username: string = "mohamed123";

let message: string = `Hello ${firstName}! You are from ${city}. Your username has ${username.length} characters and contains "123": ${username.includes("123")}`;

console.log(message);
```

The result is:

```text
Hello Mohamed! You are from Cairo. Your username has 9 characters and contains "123": true
```

This solution uses:

* `Template Literals`
* String Interpolation
* `length`
* `includes()`

All of these concepts were covered in the lesson.

---

## 🔗 Related Lessons

### Previous / Prerequisite Lessons

* Primitive Types in TypeScript
* Type Annotations

### Next / Recommended Lessons

* `number` Type
* `boolean` Type
* Type Inference

### Related Lessons

* JavaScript Strings
* Template Literals
* TypeScript Type System
