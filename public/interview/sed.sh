#!/bin/sh

%s/""/"/g
%s/ "/
%s/^[a-z]/{ speaker: &/g
%s/speaker: /&"/g
%s/^"/{ text: "/g
%s/[^,]$/&"}, 
%s/"$/" },/g