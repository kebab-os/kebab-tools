<div align="center">
  <a href="https://kebabos.me"><img src="static/favicon.png" width="200px" height="auto" /></a>
  <h1>kebab-tools - v1.12.5</h1>
  <div>
    <a href="https://github.com/kebab-os/kebab-tools/issues"><img alt="GitHub Issues" src="https://img.shields.io/github/issues/kebab-os/kebab-tools?style=flat-square"></a>
    <a href="list.json"><img alt="Tools Count" src="https://img.shields.io/endpoint?style=flat-square&url=https://raw.githubusercontent.com/kebab-os/kebab-tools/main/metrics/tools.json?raw=1&cacheSeconds=3600"></a>
    <a href="https://github.com/kebab-os/kebab-tools/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/kebab-os/kebab-tools?style=flat-square"></a>
    <a href="https://github.com/kebab-os/kebab-tools/branches/all"><img alt="GitHub branch check runs" src="https://img.shields.io/github/check-runs/kebab-os/kebab-tools/main?style=flat-square"></a>
    <a href="https://github.com/kebab-os/kebab-tools/commits/main/"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/kebab-os/kebab-tools?style=flat-square"></a>
</a>
  </div><br />
  <b>Endpoint based developer tools</b>
</div>

---

## Introduction

kebab-tools is a versatile suite of command-line utilities designed for seamless integration into your terminal workflow via curl. Built for developers who value efficiency and minimalism, it eliminates the need to switch between windows or leave the CLI to perform common tasks. Whether you're debugging, formatting data, or managing system operations, kebab-tools provides a fast, dependency-free way to access essential developer resources directly from your shell.


## Get started

### CLI Tool (recommended)

Install `kebab` as a system-wide command so you can run tools directly from your terminal:

```bash
# Download and inspect the script first (recommended)
curl -fsSL https://raw.githubusercontent.com/kebab-os/kebab-tools/refs/heads/main/install/cli-install.sh -o cli-install.sh
# Review it, then run:
sudo bash cli-install.sh
```

Once installed you can run any tool as a subcommand:

```bash
kebab random int
kebab random uuid
kebab math add 1,2,3
kebab text reverse hello-world
kebab case upper hello
kebab base64 encode hello
kebab hash sha256 hello
kebab date today
kebab convert c-to-f 100
kebab list          # list all available tools
kebab --help        # show help
```

The CLI maps your arguments to a URL path and fetches the result from `https://tools.kebabos.me`:

```
kebab random int         →  https://tools.kebabos.me/random/int
kebab math add 1,2,3     →  https://tools.kebabos.me/math/add/1,2,3
```

Alternatively, you can run the script without installing it:

```bash
curl -fsSL https://raw.githubusercontent.com/kebab-os/kebab-tools/refs/heads/main/cli/kebab -o kebab
chmod +x kebab
python3 kebab random int
```

### Curl (easiest setup)

1. Start by running this bash command in shell:

```bash
curl https://tools.kebabos.me
```

If that doesnt work, try our secondary domain:

```bash
curl https://kebab-tools.pages.dev
```

2. To view help, use the `/help` endpoint, or use `help/[page #]` to view certain sections. Use the `/list` endpoint to view a json list of all the tools. You can also view the [list.json](list.json) file on github.

If this doesnt work, [raise an issue](https://github.com/kebab-os/kebab-tools/issues/new/choose) to help support the project.

### Client Shell (advanced setup)

Instead of using bash commands like curl to use kebab-tools, use the client shell to easily run endpoints. To get started, download [this file](cs/kebab-tools.py). To run the client shell, enter the same directory as the file, then run:

```bash
python kebab-tools.py
```

Following these steps should launch the client shell.

> [!TIP]
> To quickly install client shell in a useful location, run this install script:
> ```bash
> cd ~
> mkdir kt
> cd kt
> curl -O https://raw.githubusercontent.com/kebab-os/kebab-tools/refs/heads/main/cs/kebab-tools.py
> ```
>
> Then whenever you want to access it, run `python ~/kt/kebab-tools.py`.


## Tool List

[list.json](list.json) contains a list of all the tools in kebab-tools. The list is automatically updated by [github actions](.github/workflows/list-tools.yml), and does not update after the project is cloned locally. Alternatively, use the endpoint `/list` for a more visual json representation of the list. If you would like to use the list.json version, without useing github, you can use the [raw list.json file](https://raw.githubusercontent.com/kebab-os/kebab-tools/main/list.json) that will still be updated.


## Web Shell

If you prefer to use kebab-tools directly through your browser, you can access the web-based version by visiting [tools.kebabos.me](https://tools.kebabos.me) on a browser. Once the page loads, you will find an intuitive GUI that allows you to manage and interact with all available tools without needing to use a command line.


## Key Files/Directories

|File/Directory|Description|
|-|-|
|[`cli/kebab`](cli/kebab)|CLI tool (`kebab random int`)|
|[`cs/kebab-tools.py`](cs/kebab-tools.py)|Client shell (interactive REPL)|
|[`functions`](functions)|All tools|
|[`install/cli-install.sh`](install/cli-install.sh)|CLI tool install|
|[`install/client-shell-install.sh`](install/client-shell-install.sh)|Client shell install|
|[`list.json`](list.json)|List of tools|
|[`functions/shell-proxy`](functions/shell-proxy)|Node for webshell|


## Dependencies

Install all the [dependencies](dependencies.txt) in order to use kebab-tools.


## Issues

To help improve kebab-tools, contributing to this repository would be appriciated. To help us fix bugs, [create an issue](https://github.com/kebab-os/kebab-tools/issues/new/choose) to make kebab-tools free of any bugs.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Contributors

<!-- <a href="#"><img alt="Date" src="https://img.shields.io/endpoint?style=flat-square&url=https://raw.githubusercontent.com/kebab-os/kebab-tools/main/.shields/date.json?raw=1&cacheSeconds=3600"></a>-->
These are the contributors for kebab-tools:

- [@7aimez](https://github.com/7aimez) - 7ames
- [@ethembeldagli](https://github.com/ethembeldagli) - Ethem Beldagli

## Checks

To view the status of all the checks, use [CHECKS.md](CHECKS.md).

## License

<a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/kebab-os/kebab-tools?style=flat-square"></a>

<br /><br/><hr />
<div align="right"><sub>&copy; 2026 kebab-tools</sub></div>
