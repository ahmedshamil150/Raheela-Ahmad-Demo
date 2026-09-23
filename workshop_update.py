import re

with open('training-workshops.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Move "Happy Healing Circle" to the top
# The original has:
# <h2 class="page-content-heading">Workshops for lasting personal transformation.</h2>...
# <h2 class="happy-healing-circle-heading">Happy Healing Circle</h2>

# Remove Happy Healing Circle from current location
html = html.replace('<h2 class="happy-healing-circle-heading">Happy Healing Circle</h2>', '')

happy_healing_section = """<h2 class="happy-healing-circle-heading" style="text-align: center; font-size: 42px; margin-bottom: 20px;">Happy Healing Circle</h2>
<div style="display: flex; gap: 20px; justify-content: center; margin-bottom: 20px;">
    <img src="images/workshopes image/workshop-1.jpeg" style="width: 45%; border-radius: 8px;">
    <img src="images/workshopes image/workshop-5.jpeg" style="width: 45%; border-radius: 8px;">
</div>
<p style="text-align: center; font-size: 18px; max-width: 800px; margin: 0 auto 20px;">A fun-filled class designed to help release stress, anxiety, emotional heaviness, physical pain, and energetic blockages.</p>
<p style="text-align: center; font-size: 18px; max-width: 800px; margin: 0 auto 20px;">Using a blend of metaphysical practices, ancient Tibetan wisdom, laughter therapy, and energy healing, this uplifting experience creates a safe and nurturing space to release what no longer serves you.</p>
<p style="text-align: center; font-size: 18px; font-weight: bold; max-width: 800px; margin: 0 auto 40px;">Come as you are. Let go, grow & glow.</p>
"""

# Insert at the beginning of the material-section reveal
html = html.replace('<section class="material-section reveal">', '<section class="material-section reveal">\n' + happy_healing_section)

# 2. Reiki Level images
reiki_images = """
<div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px; margin-bottom: 40px;">
    <img src="images/workshopes image/workshop-2.jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
    <img src="images/workshopes image/workshop-3.jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
    <img src="images/workshopes image/workshop-4.jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
</div>
"""
html = html.replace('channel universal life force energy for yourself and others.</p>', 'channel universal life force energy for yourself and others.</p>' + reiki_images)

# 3. Sufi Breathwork
sufi_images = """
<div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px; margin-bottom: 40px;">
    <img src="images/workshopes image/workshop-6.jpeg" style="width: 45%; border-radius: 8px; object-fit: cover;">
    <img src="images/workshopes image/workshop-7.jpeg" style="width: 45%; border-radius: 8px; object-fit: cover;">
</div>
"""
html = html.replace('<h2>Sufi Breathwork and Reiki Healing Circle</h2>', '<h2>Sufi Breathwork Circle</h2>')
html = html.replace('releases emotional tension, and nurtures your spiritual connection.</p>', 'releases emotional tension, and nurtures your spiritual connection.</p>' + sufi_images + '\n<h2>Reiki Healing Circle</h2>\n<div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px; margin-bottom: 40px;"><img src="images/workshopes image/workshop-8.jpeg" style="width: 45%; border-radius: 8px; object-fit: cover;"><img src="images/workshopes image/workshop-9.jpeg" style="width: 45%; border-radius: 8px; object-fit: cover;"></div>\n')

# 4. TV Appearances
tv_section = """
<h2>TV Appearances</h2>
<div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px; margin-bottom: 40px;">
    <img src="images/WhatsApp Image 2026-09-18 at 8.10.25 PM.jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
    <img src="images/WhatsApp Image 2026-09-18 at 8.10.25 PM (1).jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
    <img src="images/WhatsApp Image 2026-09-18 at 8.11.13 PM.jpeg" style="width: 30%; border-radius: 8px; object-fit: cover;">
</div>
"""
html = html.replace('path number, expression number, and lucky numbers.</p>', 'path number, expression number, and lucky numbers.</p>\n' + tv_section)


with open('training-workshops.html', 'w', encoding='utf-8') as f:
    f.write(html)
