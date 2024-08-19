---
sidebar_label: vector
title: utils.vector
---

## Vector Objects

```python
class Vector(complex)
```

Simple immutable 2D vector class based on the Python complex number type

Create and access - coordinates

&gt;&gt;&gt; v = Vector(1, 2)
&gt;&gt;&gt; v.x, v.y
(1.0, 2.0)

Create and access - angle and magnitude (length)

&gt;&gt;&gt; v = Vector.polar(math.pi, 2)
&gt;&gt;&gt; v
Vector(-2.0, 0.0)
&gt;&gt;&gt; v.magnitude  # Length of the vector, alias for abs(v)
2.0
&gt;&gt;&gt; v.radians
3.141592653589793
&gt;&gt;&gt; v.degrees
180.0

Arithmetic operations

&gt;&gt;&gt; Vector(1, 1) + 2
Vector(3.0, 1.0)
&gt;&gt;&gt; Vector(0.1, 0.1) + Vector(0.2, 0.2)  == Vector(0.3, 0.3)  # Float tolerance 10 decimals
True
&gt;&gt;&gt; Vector(2, 3) - Vector(1, 1)
Vector(1.0, 2.0)
&gt;&gt;&gt; Vector(1, 1) * 2
Vector(2.0, 2.0)
&gt;&gt;&gt; round(Vector.polar(math.pi / 4, 1), 1)
Vector(0.7, 0.7)

Get a new vector by adjusting one of the coordinates
&gt;&gt;&gt; v = Vector()
&gt;&gt;&gt; v.with_x(1)
Vector(1.0, 0.0)
&gt;&gt;&gt; v.with_y(2)
Vector(0.0, 2.0)

Get a new vector by adjusting angle or magnitude

&gt;&gt;&gt; v = Vector(1, 2)
&gt;&gt;&gt; v = v.with_magnitude(4.47213595499958)  # Twice as long
&gt;&gt;&gt; v.x, v.y
(2.0, 4.0)

&gt;&gt;&gt; v = Vector.polar(math.pi, 2)
&gt;&gt;&gt; v
Vector(-2.0, 0.0)
&gt;&gt;&gt; v.with_radians(0)
Vector(2.0, 0.0)
&gt;&gt;&gt; v.with_degrees(90)
Vector(0.0, 2.0)

