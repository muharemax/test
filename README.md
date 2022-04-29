# Simple NodeJs App

## Requirements

The following is a list of requirements:
 - node `v18.0.0`
 - npm `8.6.0`

## Description

This is a simple node.js based app that exposes following endpoints:

1. First endpoint
```
GET /api/health
```

returns the following JSON:

```json
{
  "status": "ok"
}
```


2. Second endpoint

```
GET /api/mirror?word={word}
```

returns a JSON payload containing the transformed input `word` as follows:
  1. Any lowercase letter must be transformed to be uppercase
  2. Any uppercase letter must be transformed to be lowercase
  3. Any digit must be inverted with its complementary ('9' becomes '0', '0' becomes '9', '4' becomes '5', and so on...)
  4. Any other character should be left as is
  5. A final transformation must be applied so that the whole string is reversed. ('foo' ⇒ 'oof', 'bar' ⇒ 'rab')

## Running

To run the app, execute:

```
node index.js
```

The app will listen on port `4545`.
