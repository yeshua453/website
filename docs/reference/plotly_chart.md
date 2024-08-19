---
sidebar_label: plotly_chart
title: plotly_chart
---

## PlotlyChart Objects

```python
class PlotlyChart(Container)
```

Displays Plotly(https://plotly.com/python/) chart.

**Example**:

```
import plotly.express as px

import flet as ft
from flet_core.plotly_chart import PlotlyChart

def main(page: ft.Page):

    df = px.data.gapminder().query("continent=='Oceania'")
    fig = px.line(df, x="year", y="lifeExp", color="country")

    page.add(PlotlyChart(fig, expand=True))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/plotlychart

