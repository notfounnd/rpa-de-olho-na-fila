# robot -d ./log/perform_data rpa\
# robot -d ./log/perform_data -i perform rpa\
# robot -d ./log/perform_data -i chart rpa\

*** Settings ***
Library             generate_dados_fila.py
Library             generate_chart_payload.py

*** Variables ***
${EXCEL_FILE}       ./rpa/files/dados.xlsx

*** Test Cases ***
Generate Data
    [tags]      perform
    Generate_data       ${EXCEL_FILE}

Generate Chart
    [tags]      chart
    Generate_chart      ${EXCEL_FILE}

*** Keywords ***
