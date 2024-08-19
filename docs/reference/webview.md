---
sidebar_label: webview
title: webview
---

## WebView Objects

```python
class WebView(ConstrainedControl)
```

Easily load webpages while allowing user interaction.

The `WebView` control is designed exclusively for iOS and Android platforms.

## Examples
A simple webview implementation using this class could be like:

```python
import flet

def main(page: flet.Page):
    wv = flet.WebView(
        "https://flet.dev",
        expand=True,
        on_page_started=lambda _: print("Page started"),
        on_page_ended=lambda _: print("Page ended"),
        on_web_resource_error=lambda e: print("Page error:", e.data),
    )
    page.add(wv)

flet.app(main)
```

## Properties

### `url`

Start the webview by loading the `url` value.

### `javascript_enabled`

Enable or disable the javascript execution of the page. Note that disabling the javascript execution of the page may result unexpected webpage behaviour.

### `prevent_link`

Specify a link to prevent it from downloading.

### `bgcolor`

Set the background color of the webview.

## Events

### `on_page_started`

Fires soon as the first loading process of the webpage is started.

### `on_page_ended`

Fires when all the webpage loading processes are ended.

### `on_web_resource_error`

Fires when there is error with loading a webpage resource.

View docs: [WebView](https://flet.dev/docs/controls/webview)

