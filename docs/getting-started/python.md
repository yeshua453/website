---
title: Creating Flet apps in Python
sidebar_label: Creating Flet apps in Python
slug: python
---

To write a Flet app you don't need to be front-end guru, but it's recommended to have a basic knowledge of Python and object-oriented programming.

In this guide we'll study the structure of a Flet app, learn how to output data using Flet controls, request data from a user and build basic page layouts. We will also cover some packaging and deployment options to deliver ready app to your users.

## Installing `flet` module

Flet requires Python 3.7 or above. To start with Flet, you need to install `flet` module first:

```bash
pip install flet
```

:::note
To upgrade `flet` module run:

```bash
pip install flet --upgrade
```
:::

## Basic app structure

A very minimal Flet app has the following structure:

```python
import flet
from flet import Page, Text

def main(page: Page):
    # add/update controls on Page
    pass

flet.app(target=main)
```

[TBD]



## Flet app structure

In the [previous step](#getting-started-with-flet), we learned how to create a simple Flet page. On that page, all users work with the same contents ("**shared app**").

:::note

Try adding `Textbox` control instead of `Text`:

```python
import flet
from flet import Textbox

page = flet.page()
page.add(Textbox())
```

Run the app and open its URL in multiple browser tabs. You'll see that changing Textbox contents in one tab is instantly reflected in others.

:::

A shared page may be useful for certain types of apps, such as dashboards, status pages, or reports. But for a ToDo app, we want every user to see their own set of tasks. To achieve this, we need to create a "**multi-user app**".

Create `hello-app.py` with the following contents:

```python title="hello-app.py"
import flet
from flet import Textbox

def main(page):
  page.add(Textbox())

flet.app("hello-app", target=main)
```

While the application is running, for every new user session Flet calls `main` function with unique page contents.

:::note
To see multiple sessions in action, open the application URL in a new "incognito" browser window.
:::

## Adding page controls and handling events

Now we're ready to create a multi-user ToDo app.

To start, we'll need a Textbox for entering a task name, and an "Add" button with an event handler that will display a checkbox with a new task.

Create `todo.py` with the following contents:

```python title="todo.py"
import flet
from flet import Textbox, Button, Checkbox

def main(page):
    
    def add_clicked(e):
        page.add(Checkbox(label=new_task.value))

    new_task = Textbox(placeholder='Whats needs to be done?')

    page.add(
        new_task,
        Button('Add', on_click=add_clicked)
    )

flet.app("todo-app", target=main)
```

Run the app and you should see a page like this:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-1.png" /></p>

### Page layout

Now let's make the app look nice! We want the entire app to be at the top center of the page, stretched over 70% of the page width. The textbox and the button should be aligned horizontally, and take up full app width:

<p style={{ textAlign: 'center' }}><img style={{ width: '90%' }} src="/img/docs/tutorial/todo-diagram-1.svg" /></p>

`Stack` is a container control that is used to lay other controls out on a page. `Stack` can be vertical (default) or horizontal, and can contain other stacks.

Replace `todo.py` contents with the following:

```python title="todo.py"
import flet
from flet import Stack, Textbox, Button, Checkbox

def main(page):

    page.title = "ToDo App"
    page.horizontal_align = 'center'
    page.update() # needs to be called every time "page" control is changed
    
    def add_clicked(e):
        tasks_view.controls.append(Checkbox(label=new_task.value))
        tasks_view.update()

    new_task = Textbox(placeholder='Whats needs to be done?', width='100%')
    tasks_view = Stack()

    page.add(Stack(width='70%', controls=[
        Stack(horizontal=True, on_submit=add_clicked, controls=[
            new_task,
            Button('Add', on_click=add_clicked)
        ]),
        tasks_view
    ]))

flet.app("todo-app", target=main)
```

Run the app and you should see a page like this:

<p style={{ textAlign: 'center' }}><img style={{ width: '50%', border: 'solid 1px #999' }} src="/img/docs/tutorial/todo-app-2.png" /></p>

## Displaying data

### Text

`Text` control is used to output textual data. Its main properties are `Value` and `Size`, but it also has a number of formatting properties to control its appearence. For example:

```powershell
Text -Value 'Centered Text' -Size xlarge -Align Center -VerticalAlign Center -Width 100 -Height 100 `
     -Color 'White' -BgColor 'Salmon' -Padding 5 -Border '1px solid #555'
```

You create control with `Text` cmdlet, add it to `Controls` collection of `$page` (or children collection of other container control such as `Stack`) and then call `$page.Update()` to send local page changes to Flet server:

```powershell
$txt = Text -Value "Hi there!"
$page.Controls.Add($txt)
$page.Update()
```

You can update control properties and push the changes again:

```powershell
$txt.Text = "Current date is: $(GetDate)"
$txt.Color = "Blue"
$page.Update()
```

You can even do some animations, for example:

```powershell
$text = Text -Value 'Centered Text' -Size xlarge -Align Center -VerticalAlign Center -Width 100 -Height 100 `
  -Color 'White' -BgColor 'Salmon' -Padding 5 -Border '1px solid #555'
$page.Add($text)

for($i = 0; $i -le 50; $i++) {
  $text.Value = "Radius $i"
  $text.BorderRadius = $i
  $page.Update()
  Start-Sleep -Milliseconds 50
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/radius-animation.gif" /></div>

`$page.Update()` is smart enough to send only the changes made since its last call, so you can add a few new controls to the page, remove some of them, change control properties and then call `$page.Update()` to do batched update, for example:

```powershell
for($i = 0; $i -le 20; $i++) {
  $page.Controls.Add((Text "Line $i"))
  if ($i -gt 4) {
    $page.Controls.RemoveAt(0)
  }
  $page.Update()
  Start-Sleep -Milliseconds 300
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/lines-animation.gif" /></div>

### Progress

Use `Progress` control to display a progress bar. For example, to display a progress of imaginary copy operation:

```powershell
$prog1 = Progress -Label "Copying /file1.txt to /file2.txt" -Width "30%" -BarHeight 4
$page.Add($prog1)

for($i = 0; $i -le 100; $i=$i+5) {
  $prog1.Value = $i
  $prog1.Update()
  Start-Sleep -Milliseconds 100
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/progress-copy.gif" /></div>

You can use `Description` property to display the progress of some multi-step operation:

```powershell
$prog2 = Progress -Label "Create new account" -Width "30%"
$page.Add($prog2)

$steps = @('Preparing environment...', 'Collecting information...', 'Performing operation...', 'Complete!')
for($i = 0; $i -lt $steps.Length; $i++) {
    $prog2.Description = $steps[$i]
    $prog2.Value = 100 / ($steps.Length - 1) * $i
    $page.Update()
    Start-Sleep -Seconds 1
}
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/progress-multi-step.gif" /></div>

### Spinner

Use `Spinner` control to visualize an indeterminate progress:

```powershell
$sp = Spinner -Label "Please wait while the process is running..." -LabelPosition Right
$page.Add($sp)
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/spinner-animation.gif" /></div>

## Getting user input

Making interactive web apps with Flet is a breeze! It's not just limited to displaying data, but you can request an input from a user and respond to various events generated by page controls.

### Button

`Button` is the most essential input control which generates `click` event when pressed:

```powershell
$btn = Button "Click me!"
$page.Add($btn)
```

[SCREENSHOT?]

All events generated by controls on a web page are continuously sent back to your script, so how do you respond to a button click?

### Event handlers

"Counter" app with `Switch-FletEvents`:

```powershell
Import-Module flet
$page = Connect-FletPage -Name "counter"

try {
    $page.Clean()

    $num_txt = TextBox -Value 0

    $minus_btn = Button "-" -OnClick {
      $num_txt.Value = [int]$num_txt.Value - 1
      $page.Update()
    }
  
    $plus_btn = Button "+" -OnClick {
      $num_txt.Value = [int]$num_txt.Value + 1
      $page.Update()
    }
  
    $page.Add((Stack -Horizontal -Controls @(
      $minus_btn
      $num_txt
      $plus_btn
    )))

    Switch-FletEvents
}
finally {
    $page.Close()
}
```

### Textbox

Flet provides a number of [controls](/docs/controls) for building forms: [Textbox](/docs/controls/textbox), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [Button](/docs/controls/button).

Let's ask a user for a name:

```powershell title="greeter.ps1"
Import-Module flet

Connect-FletPage "greeter"

Invoke-Flet "clean"
Invoke-Flet "add textbox label='Your name' description='Please provide your full name'"
Invoke-Flet "add button primary text='Say hello'"
```

### Checkbox

TBD

### Dropdown

TBD

## Layout

Stack...

## Deploying the app

Congratulations! You have created your first Python web app with Flet, and it looks awesome!

Now it's time to share your app with the world!

### Instant sharing

Flet is not only a framework for building web apps, but it is also a service for hosting apps' UI.
You can have the application running on your computer while its UI is streaming to Flet service in real-time.

To make the app instantly available on the Internet, just add `web=True` parameter to `flet.app()` call at the very end of the program:

```python
# ...

flet.app(target=main, web=True)
```

A new browser windows will be opened with the URL like this:

```
https://app.flet.dev/public/{random}
```

### Replit

Instant sharing is a great option to quickly share an app on the web, but it requires your computer to be on all the time.

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some limitations.

To run your ToDo app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New repl" button.
* Select "Python" language from a list and provide repl name, e.g. `my-todo`.
* Click "Packages" tab and search for `flet` package; select its latest version.
* Switch back to "Files" tab and copy-paste the [code of Todo app](https://github.com/pglet/examples/blob/main/python/todo/todo-complete.py) into `main.py`.
* Update `flet.app()` call (at the very end of the program) to:

```python
flet.app("index", target=main)
```

* Run the app. Now both the application code and UI are running on Replit service as a "standalone" app.

:::note
We are not affiliated with Replit - we just love the service. Todo app demo for this tutorial is [hosted on Replit](https://replit.com/@pglet/ToDo-web-app-in-Python) and you can just "fork" it there and play.
:::

## Summary

In this tutorial you have learned how to:

* Create a shared page and a multi-user web app;
* Work with Reusable UI components;
* Design UI layout using `Stack` control;
* Work with lists: view, edit and delete items, filtering;
* Deploy your app two ways: Flet Service and Replit;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/pglet/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/rWjf7xx), follow on [Twitter](https://twitter.com/fletdev).