---
sidebar_label: querystring
title: querystring
---

## UrlComponents Objects

```python
class UrlComponents()
```

`UrlComponents` are meant to be used internally for decoding-encoding, it has no external use

## QueryString Objects

```python
class QueryString(UrlComponents)
```

**Notes**:

  `QueryString` class is meant to be for internal use inside of page. Hence, methods such as `get()` or `to_dict()` must be
  
  called from `page` object
  
  
  Constructor:
  `page` takes `Page` class an an argument and extracts URL automatically
  
  

**Methods**:

  Public:
  `get()` method takes `key` an an argument and returns value according to key. (Ex: .../?name=Joe -&gt; `get('name')` -&gt; `Joe`)
  
  `get()`0 returns all the key-value pairs of querystring as a `get()`1
  
  `get()`2 returns url path (Ex: .../products?id=1 -&gt; /products)
  
  Private(meant to be used only inside of page class):
  `get()`3 method takes key-value pair as an argument and returs proceeded querystring ready to be merged with URL

#### \_\_call\_\_

```python
def __call__()
```

Call dunder method updates url after updating `Page`

