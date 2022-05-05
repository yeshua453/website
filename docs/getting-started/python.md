---
title: Creating Flet apps in Python
sidebar_label: Creating Flet apps in Python
slug: python
---

To write a Flet app you don't need to be front-end guru, but it's recommended to have a basic knowledge of Python and object-oriented programming.

In this guide we'll study the structure of a Flet app, learn how to output data using Flet controls, request data from a user and build basic page layouts. We will also cover some packaging and deployment options to deliver a ready app to your users.

## Installing `flet` module

Flet requires Python 3.8 or above. To start with Flet, you need to install `flet` module first:

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
from flet import Page

def main(page: Page):
    # add/update controls on Page
    pass

flet.app(target=main)
```

:::note
This section is intentionally called "basic" as later in this guide we'll look at more real-world approaches to app structure with reusable controls.
:::

A typical Flet program ends with a call to `flet.app()` where the app starts waiting for new user sessions. Function `main()` is an entry point in a Flet application. It's being called on a new thread for every user session with a `Page` instance passed into it. When running Flet app in the browser a new user session is started for every opened tab or page. When running as a desktop app there is only one session created.

`Page` is like a "canvas" specific to a user, a visual state of a user session. To build an application UI you add and remove controls to a page, update their properties. Code sample above will be displaying just a blank page to every user.

By default, Flet app starts in a native OS window, which is very handy for developing. However, you can open it in a new browser window by modifying a call to `flet.app` as following:

```python
flet.app(target=main, view=flet.WEB_BROWSER)
```

:::info
Internally, every Flet app is a web app and even if it's opened in a native OS window a built-in web server is still started on a background. Flet web server is called "Fletd" and by default it's listening on a random TCP port. You can specify a custom TCP port and then open the app in the browser along with desktop view:

```python
flet.app(port=8550, target=main)
```

Open `http://localhost:<port>` in your browser to see web version of your Flet app.
:::

## Controls

User interface is made of **Controls** (aka widgets). To make controls visible to a user they must be added to a `Page` or inside other controls. Page is the top-most control. Nesting controls into each other could be represented as a tree with Page as a root.

Controls are just regular Python classes. Create control instances via constructors with parameters matching their properties, for example:

```python
t = Text(value="Hello, world!", color="green")
```

To display control on a page add it to `controls` list of a Page and call `page.update()` to send page changes to a browser or desktop client:

```python
import flet
from flet import Page

def main(page: Page):
    t = Text(value="Hello, world!", color="green")
    page.controls.append(t)
    page.update()

flet.app(target=main)
```

:::note
In the following examples we will be showing just the contents of `main` function.
:::



 Instances created via constructors. Controls have properties and events.

You add controls by adding them into children collections of other controls. Call page.update() after modifying. DO not call update() after each modification.

You can modify control properties. Update(), batches. Control properties can be modified by actions made by user. You can read control properties in event handlers.

Controls are stateful - imperative model - easier. Compare with React and Flutter declarative models where control tree is generated from the data every time it changes. Managing state in frontend apps is inherently complex task.

Controls can be nested. Controls tree is called DOM (Document Object Model).

There are controls for 1) displaying information, 2) data entry, 3) layout controls for arranging other controls on a page, 4) navigation controls and 5) utility controls.


`Visible` - explain

`Enabled` - recursive


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

#### Text styles

### Icon

Icons list

Link to an app

### Image

Note about CORS
Side-loading assets

### ProgressBar

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


### ProgressRing

Use `Spinner` control to visualize an indeterminate progress:

```powershell
$sp = Spinner -Label "Please wait while the process is running..." -LabelPosition Right
$page.Add($sp)
```

<div style={{textAlign: 'center'}}><img src="/img/docs/powershell-tutorial/spinner-animation.gif" /></div>

## Layout

Stack...
Row
Column
Stack
Container
padding, margin, border, etc.

## Colors

Colors list
Link to an app

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

Flet provides a number of [controls](/docs/controls) for building forms: [TextField](/docs/controls/textfield), [Checkbox](/docs/controls/checkbox), [Dropdown](/docs/controls/dropdown), [ElevatedButton](/docs/controls/elevatedbutton).

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

## Collections

You can use `Column` and `Row` in the most cases.


Lot of records:

### ListView

### GridView

`control.clean()` optimization.

Updating in batches (i % 100) optimization.

## Deploying web app

Flet app can be deployed as a "standalone" web app which means both your Python app and Flet web server are deployed together as a bundle.

Flet apps use WebSockets for real-time partial updates of their UI and sending events back to your program.
When choosing a hosting provider for your Flet app you should pay attention to their support of WebSockets. Sometimes WebSockets are not allowed or come as a part of more expensive offering, sometimes there is a proxy that periodically breakes WebSocket connection by a timeout (Flet implements re-connection logic, but it could be unpleasant behavior for users of your app anyway).

Another important factor while choosing a hosting provider for Flet app is latency. Every user action on UI sends a message to Flet app and the app sends udpdated UI back to user. Make sure your hosting provider has multiple data centers, so you can run your app closer to the majority of your users.

:::note
We are not affiliated with hosting providers in this section - we just use their service and love it.
:::

### Fly.io

[Fly.io](https://fly.io) has robust WebSocket support and can deploy your app to a [data center](https://fly.io/docs/reference/regions/) that is close to your users. They have very attractive pricing with a [generous free tier](https://fly.io/docs/about/pricing/#free-allowances) which allows you to host up to 3 applications for free.

To get started with Fly install [flyctl](https://fly.io/docs/getting-started/installing-flyctl/) and then authenticate:

    flyctl auth login

To deploy the app with `flyctl` you have to add the following 3 files into the folder with your Python app.

Create `requirements.txt` with a list of application dependencies. At minimum it should contain `flet` module:

```txt title="requirements.txt"
flet>=0.1.16
```

Create `fly.toml` describing Fly application:

```toml title="fly.toml" {1,8}
app = "<your-app-name>"

kill_signal = "SIGINT"
kill_timeout = 5
processes = []

[env]
  FLET_SERVER_PORT = "8080"

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 8080
  processes = ["app"]
  protocol = "tcp"
  script_checks = []

  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

Replace `<your-app-name>` with desired application name which will be also used in application URL, such as `https://<your-app-name>.fly.dev`.

Note we are setting the value of `FLET_SERVER_PORT` environment variable to `8080` which is an internal TCP port Flet web app is going to run on.

Create `Dockerfile` containing the commands to build your application container:

```Dockerfile title="Dockerfile"
FROM python:3-alpine

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python", "./main.py"]
```

`main.py` is a file with your Python program.

:::note
Fly.io deploys every app as a Docker container, but a great thing about Fly is that it provides a free remote Docker builder, so you don't need Docker installed on your machine.
:::

Next, switch command line to a folder with your app and run the following command to create and initialize a new Fly app:

    flyctl apps create --name <your-app-name>

Deploy the app by running:

    flyctl deploy

That's it! Open your app in the browser by running:

    flyctl apps open

### Replit

[Replit](https://replit.com/) is an online IDE and hosting platform for web apps written in any language. Their free tier allows running any number of apps with some performance limitations.

To run your app on Replit:

* [Sign up](https://replit.com/signup?from=landing) on Replit.
* Click "New repl" button.
* Select "Python" language from a list and provide repl name, e.g. `my-app`.
* Click "Packages" tab and search for `flet` package; select its latest version.
* Click "Secrets" tab and add `FLET_SERVER_PORT` variable with value `5000`.
* Switch back to "Files" tab and copy-paste your app into `main.py`.
* Run the app. Enjoy.

## Summary

In this tutorial you have learned how to:

* Create a shared page and a multi-user web app;
* Work with Reusable UI components;
* Design UI layout using `Stack` control;
* Work with lists: view, edit and delete items, filtering;
* Deploy your app two ways: Flet Service and Replit;

For further reading you can explore [controls](/docs/controls) and [examples repository](https://github.com/pglet/examples/tree/main/python).

We would love to hear your feedback! Please drop us an [email](mailto:hello@flet.dev), join the discussion on [Discord](https://discord.gg/rWjf7xx), follow on [Twitter](https://twitter.com/fletdev).