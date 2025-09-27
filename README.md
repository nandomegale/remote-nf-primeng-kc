A remote Angular 20 app using Native Federation to load remote features. It also handles Keycloak auth (keycloak-js + keycloak-angular). UI components are built with PrimeNG.

## Prerequisites

- Node.js 20+

## Setup

- git clone git@github.com:nandomegale/remote-nf-primeng-kc.git
- cd remote-nf-primeng-kc
- npm install

## Run (dev)

ng serve

# default: http://localhost:4201

## Federation notes

- This app exposes modules consumed by the shell.
- Confirm the exposure in http://localhost:4201/remoteEntry.json

Shell app: shell-nf-primeng-kc → [\[LINK TO SHEll REPO\]](https://github.com/nandomegale/shell-nf-primeng-kc)
