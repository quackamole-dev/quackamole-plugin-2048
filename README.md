# Quackamole Plugin multiplayer 2048

Fork of a 2048 game implementation, with a few tweaks to make it suitable for use as a Quackamole plugin.

Not fully adjusted for quackamole yet but the idea is that every user in a quackamole move controls the same game.

Every player makes a move and the one that inevitably causes the gameover is the one that loses.

To keep rounds short, maybe use the 3x3 board?

## Original README below
---
---
---
---
---

<img alt="2048" align="left" width="120" hspace="20" src="https://raw.githubusercontent.com/mat-sz/2048/master/public/logo512.png">

# 2048 &bull; [Demo](https://demo.matsz.dev/2048/)

<img alt="workflow" src="https://img.shields.io/github/workflow/status/mat-sz/react-letter/Node.js%20CI%20(yarn)">

This is a reimplementation of Gabriele Cirulli's excellent [2048](https://play2048.co) game, built with React, Redux
and TypeScript. Unlike other React-based implementations, only functional components (with hooks) are used here. This project doesn't rely on canvas or element refs. This project was bootstrapped using the [mat-sz](https://github.com/mat-sz/cra-template-mat-sz) CRA template.

## Running/Development

As with many CRA-based application, 2048 can be run using the following commands:

```
yarn install
yarn start
```

## Unit Tests

Several unit tests for game logic are available. You can run the test suite using:

```
yarn test
```
