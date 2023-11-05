#!/bin/bash

extract_vals() {
    title=$(head -n 1 "$1")
    subtitle=$(sed -n '2p' "$1")
    date='new Date("'$(sed -n '3p' "$1")'")'

}
