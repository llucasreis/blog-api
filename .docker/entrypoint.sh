#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env.dev
fi

yarn install

yarn dev