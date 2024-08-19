---
sidebar_label: cupertino_colors
title: cupertino_colors
---

url=&#x27;https://raw.githubusercontent.com/flutter/flutter/stable/packages/flutter/lib/src/cupertino/colors.dart&#x27;
output_file=&quot;$HOME/cupertino_python_colors.txt&quot;
curl -s $url | python -c &#x27;
import re

for line in __import__(&quot;sys&quot;).stdin:
    match1 = re.search(r&quot;static const CupertinoDynamicColor ([a-zA-Z0-9_]+)&quot;, line)
    match2 = re.search(r&quot;static const Color ([a-zA-Z0-9_]+)&quot;, line)
    if match1:
        print(&quot;{} = &quot;{}&quot;&quot;.format(match1.group(1).upper(), match1.group(1)))
    elif match2:
        print(&quot;{} = &quot;{}&quot;&quot;.format(match2.group(1).upper(), match2.group(1)))
&#x27; &gt;&gt; &quot;$output_file&quot;

#### random\_color

```python
def random_color() -> str
```

Return a random color from the colors defined in this module.

