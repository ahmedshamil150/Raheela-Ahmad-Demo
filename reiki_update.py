import re
with open('css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()
# Remove the reiki image css
content = re.sub(r'body\[data-page="reiki"\] \.material-section::before \{.*?\n\}', '', content, flags=re.DOTALL)
with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(content)

with open('css/interactive.css', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));', 'grid-template-columns: repeat(3, 1fr);')
with open('css/interactive.css', 'w', encoding='utf-8') as f:
    f.write(content)
