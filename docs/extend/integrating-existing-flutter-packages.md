---
title: Integrating existing Flutter packages into your Flet app
sidebar_label: Integrating existing Flutter packages
---

:::info Work in progress
The guide is being updated.
:::

## Introduction

Today Flet offers more than 100 controls, but, as you can imagine, not every Flutter library/widget could be added to the core Flet library and Flet team couldn't do that alone in the acceptable timeframe.

At the same time we do not want to put our valued users, who chose Flet to build their next commercial or corporate app, into a situation where their progress depends on Flet team availability and desire to implement a Flutter control they need.

Flet framework provides extensibility mechanism to build your Flet app with widgets or/and API from your own or [3rd-party Flutter packages](https://pub.dev/packages?sort=popularity).

### Prerequisites

To integrate custom Flutter package into Flet you need to understand how to create Flutter apps and packages in Dart language and have Flutter development environment configured. See [Flutter Getting Started](https://docs.flutter.dev/get-started/install) for more information about Flutter and Dart.

## Quick start

In short, you have to create a new Flutter package which implements and exports two methods:

```dart
void ensureInitialized();
Widget createControl(CreateControlArgs args);
```

See [`ensureInitialized()`](https://github.com/flet-dev/flet/blob/main/packages/flet_video/lib/src/create_control.dart#L16-L18) and [`createControl()`](https://github.com/flet-dev/flet/blob/main/packages/flet_video/lib/src/create_control.dart#L6-L14) implementations for `Video` control.

On Python side you create a new class inherited from `Control` (non-visual or overlay controls) or `ConstrainedControl`.

See [`Video`](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/video.py#L44) class implementation in Python.

To integrate a custom Flutter package while building your Flet app with [`flet build` command](/docs/publish) you can list extra packages with either `--include-packages` option or in `pubspec.yaml` file put into root of your Flet app.

### Learn by example

A few Flet controls are implemented as in external packages and could serve as a starting point for your own controls:

* `Video` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/video.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_video)
* `Audio` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/audio.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_audio)
* `Rive` - [Python control](https://github.com/flet-dev/flet/blob/main/sdk/python/packages/flet-core/src/flet_core/rive.py), [Flutter package](https://github.com/flet-dev/flet/tree/main/packages/flet_rive)


## Python control

TBD

## Dart wrapper

TBD

## How to

What to inherit on Python side?

What type of widget to return on Flutter side?

### Literal properties

### JSON properties

### Nested controls

### Methods

### Events

#### Simple events

#### Strongly-typed events

## Building your app

TBD