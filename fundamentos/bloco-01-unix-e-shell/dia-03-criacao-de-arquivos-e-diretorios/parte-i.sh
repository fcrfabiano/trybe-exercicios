#!/bin/sh

time = 3

#Parte I
echo -e "Script criado para demonstrar os aprendizados do Fundamentos do Desenvolvimento Web > Unix & Bash - Parte 1 > Exercícios 1"

echo ""

sleep $time

echo -e "1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele."

mkdir unix_tests
cd unix_tests

echo -e "Arquivos:"
ls

sleep $time

echo ""
echo -e "2. Crie um arquivo de texto com o nome trybe.txt"

touch trybe.txt

echo " Arquivos:"
ls

sleep $time

echo -e "3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt ."

cp trybe.txt trybe_backup.txt

echo -e "Arquivos:"
ls

sleep $time

echo ""
echo -e "4. Renomeie o arquivo trybe.txt ."

mv trybe.txt trybe2.txt

echo -e "Arquivos:"
ls

sleep $time

echo ""
echo -e "5. Dentro de unix_tests , crie um novo diretório chamado backup ."

mkdir backup

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "6. Mova o arquivo trybe_backup.txt para o diretório backup ."

mv trybe_backup.txt backup/

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "7. Dentro de unix_tests , crie um novo diretório chamado backup2 ."

mkdir backup2

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 ."

mv backup/trybe_backup.txt backup2/

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "9. Apague a pasta backup ."

rm -rf backup

echo " Arquivos:"
ls *

sleep $time

echo ""
echo -e "10. Renomeie a pasta backup2 para backup ."

mv backup2 backup

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele."

pwd

sleep $time

echo -e "Arquivos:"
ls *

sleep $time

echo ""
echo -e "12. Apague o diretório backup ."

rm -rf backup

echo -e "Arquivos:"
ls ../*

sleep $time

echo ""
echo -e "13. Limpe o terminal."

sleep $time

clear

echo ""
echo -e "Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :"

cat > skills.txt <<- EOF
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
EOF

echo ""
echo -e "14. Mostre na tela as 5 primeiras skills do arquivo skills.txt ."

head -5 skills.txt

sleep 3

echo ""
echo -e "15. Mostre na tela as 4 últimas skills do arquivo skills.txt ."

tail -4 skills.txt

echo ""
echo -e "16. Apague todos os arquivos que terminem em .txt ."

rm *.txt
ls *
sleep 5



