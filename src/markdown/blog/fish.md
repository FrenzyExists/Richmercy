---
title: Running Python Source With The Fish Shell
status: 'Blog'
description: 'A quick and simple way to activate your python venv while using the fish shell'
readTime: '2min'
date: 'October 24th, 2024'
tags: ['Shell', 'Python']
---

Let me guess, you ran 
```
python -m venv .venv
```
and then 
```
source .venv/bin/activate
```
to use your newly created enviroment and got this:

```bash
.venv/bin/activate (line 48): Unsupported use of '='. In fish, please use 'set _OLD_VIRTUAL_PATH "$PATH"'.
_OLD_VIRTUAL_PATH="$PATH"
^~~~~~~~~~~~~~~~~~~~~~~~^
from sourcing file .venv/bin/activate
source: Error while reading file '.venv/bin/activate'
```

Well there's a pretty easy solution for that! Thing is, there's multiple activate scripts within the _/bin/_ folder on your virtual enviroment.

```bash
ls .venv/bin/
Activate.ps1   activate.csh   pip*           pip3.12*       python3@
activate       activate.fish  pip3*          python@        python3.12@
```

There it is! An activate script wrriten in fish. So while in fish just use that.

```bash
source .venv/bin/activate.fish
```

However, there is even a better way we can activate the virtual enviroment. By adding an _alias_.

```bash
alias -s myvenv="source $HOME/.venv/venvname/bin/activate.fish"
```
