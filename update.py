import sys

def update_about():
    with open('about.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Hero section change
    content = content.replace('<p class="intro-eyebrow">ABOUT RAHEELAA</p>', '')

    # Content change
    old_content = """<h2 id="meet-title">Meet Raheelaa Ahmad</h2>
        <h3>My Story</h3>
        <p>At the age of 17, I was diagnosed with an incurable eye disease that changed the course of my life. While the diagnosis was devastating, I made a decision that would define my journey: I refused to let it define my future. Instead, I became determined to explore every possible path toward healing and to transform my life from the inside out.</p>
        <p>My first introduction to holistic healing was Reiki. After receiving my Reiki Level I and Level II certifications in Dubai, I dedicated myself to a year of consistent self-healing practice. The profound impact Reiki had on my physical, emotional, and spiritual well-being inspired me to continue my journey, eventually becoming a Reiki Grand Master.</p>
        <p>My passion for healing only grew stronger. Driven by a deep desire to improve my health, heal from the emotional impact of partial sight loss, and understand the extraordinary connection between the mind, body, and spirit, I immersed myself in the study of Clinical Hypnotherapy, Silva Mind Control, Neuro-Linguistic Programming (NLP), and other mind sciences. Each discipline offered valuable insights into the incredible healing potential that exists within every individual.</p>
        <p>My search then led me to yoga. I pursued an internationally recognised yoga certification and later specialised in Therapeutic Yoga, enabling me to support individuals living with chronic physical and emotional conditions. Through personalised therapeutic practices, I began helping people reduce pain, improve mobility, build resilience, and move toward healthier, more fulfilling lives.</p>
        <p>As my own journey unfolded, I realised that years of living with partial sight loss had left me carrying deep emotional wounds, chronic anxiety, and unresolved trauma within my body. This realisation inspired me to study psychotherapy and become a trauma-informed therapist. It gave me the tools to understand not only my own healing journey but also the profound emotional struggles that so many people silently carry.</p>
        <p>Today, my work brings together the wisdom of psychotherapy, Reiki, therapeutic yoga, breathwork, mindfulness, meditation, and other holistic healing modalities. Rather than treating symptoms in isolation, I believe in addressing the whole person&mdash;mind, body, emotions, energy, and spirit.</p>
        <p>My mission is simple yet deeply meaningful: to empower people to heal, transform, and reconnect with their innate capacity for well-being. My own journey taught me that healing is not always about changing our circumstances&mdash;it is about discovering the strength, resilience, and wisdom that already exist within us. It is this philosophy that I bring into every healing session, workshop, and training, creating a compassionate space where lasting transformation can unfold.</p>"""

    new_content = """<h2 id="meet-title" style="background-color: var(--olive); color: white; display: inline-block; padding: 10px 20px; border-radius: 4px;">Meet Raheelaa Ahmad</h2>
        <p class="intro-lead" style="margin-top: 20px;">A holistic approach to healing, self-understanding and meaningful change.</p>
        <p>What if the life you want begins with understanding the person you are today?</p>
        <p>Sometimes we know we want change, but we don't know where to begin. Perhaps you're carrying stress, anxiety, grief or the weight of an experience you haven't been able to move beyond. Perhaps you're struggling in a relationship, feeling disconnected from your body, searching for direction — or simply sensing that you're ready for a different chapter.</p>
        <p>This is where my work begins.</p>
        <p>I bring together years of experience in psychotherapy, Reiki healing, yoga (breathwork and meditation), life coaching, ancient Tibetan wisdom and metaphysical practices — to help you understand your patterns, heal your wounds and strengthen you on all levels, facilitating you in building the life you desire.</p>
        <p>Sessions are available both in person and online, from anywhere in the world.</p>

        <h3 style="margin-top: 40px; color: var(--olive-dark); font-family: var(--serif); font-size: 28px;">My Healing Journey</h3>
        <p>At the age of 17, I was diagnosed with an incurable eye disease that changed the course of my life. While the diagnosis was devastating, I made a decision that would define my journey: I refused to let it define my future. Instead, I became determined to explore every possible path toward healing and to transform my life from the inside out.</p>
        <p>My first introduction to holistic healing was Reiki. After receiving my Reiki Level I and Level II certifications in Dubai, I dedicated myself to a year of consistent self-healing practice. The profound impact Reiki had on my physical, emotional, and spiritual well-being inspired me to continue my journey, eventually becoming a Reiki Grand Master.</p>
        <p>My passion for healing only grew stronger. Driven by a deep desire to improve my health, heal from the emotional impact of partial sight loss, and understand the extraordinary connection between the mind, body, and spirit, I immersed myself in the study of Clinical Hypnotherapy, Silva Mind Control, Neuro-Linguistic Programming (NLP), and other mind sciences. Each discipline offered valuable insights into the incredible healing potential that exists within every individual.</p>
        <p>My search then led me to yoga. I pursued an internationally recognised yoga certification and later specialised in Therapeutic Yoga, enabling me to support individuals living with chronic physical and emotional conditions. Through personalised therapeutic practices, I began helping people reduce pain, improve mobility, build resilience, and move toward healthier, more fulfilling lives.</p>
        <p>As my own journey unfolded, I realised that years of living with partial sight loss had left me carrying deep emotional wounds, chronic anxiety, and unresolved trauma within my body. This realisation inspired me to study psychotherapy and become a trauma-informed therapist. It gave me the tools to understand not only my own healing journey but also the profound emotional struggles that so many people silently carry.</p>
        <p>Today, my work brings together the wisdom of psychotherapy, Reiki, therapeutic yoga, breathwork, mindfulness, meditation, and other holistic healing modalities. Rather than treating symptoms in isolation, I believe in addressing the whole person&mdash;mind, body, emotions, energy, and spirit.</p>
        <p>My mission is simple yet deeply meaningful: to empower people to heal, transform, and reconnect with their innate capacity for well-being. My own journey taught me that healing is not always about changing our circumstances&mdash;it is about discovering the strength, resilience, and wisdom that already exist within us. It is this philosophy that I bring into every healing session, workshop, and training, creating a compassionate space where lasting transformation can unfold.</p>"""

    content = content.replace(old_content, new_content)
    content = content.replace('<div class="meet-image-wrap">', '<div class="meet-image-wrap" style="padding: 10px; border: 2px solid var(--olive); border-radius: 8px;">')
    with open('about.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    new_section = """
    <section class="about-story-section" style="max-width: 1240px; margin: 40px auto; padding: 40px 32px; color: #41413a;">
        <h2 style="color: var(--olive-dark); font-family: var(--serif); font-size: 38px;">About Raheelaa</h2>
        <p>At the age of 17, I was diagnosed with an incurable eye disease that changed the course of my life. While the diagnosis was devastating, I made a decision that would define my journey: I refused to let it define my future. Instead, I became determined to explore every possible path toward healing and to transform my life from the inside out.</p>
        <p>My first introduction to holistic healing was Reiki. After receiving my Reiki Level I and Level II certifications in Dubai, I dedicated myself to a year of consistent self-healing practice. The profound impact Reiki had on my physical, emotional, and spiritual well-being inspired me to continue my journey, eventually becoming a Reiki Grand Master.</p>
        <p>My passion for healing only grew stronger. Driven by a deep desire to improve my health, heal from the emotional impact of partial sight loss, and understand the extraordinary connection between the mind, body, and spirit, I immersed myself in the study of Clinical Hypnotherapy, Silva Mind Control, Neuro-Linguistic Programming (NLP), and other mind sciences. Each discipline offered valuable insights into the incredible healing potential that exists within every individual.</p>
        <p>My search then led me to yoga. I pursued an internationally recognised yoga certification and later specialised in Therapeutic Yoga, enabling me to support individuals living with chronic physical and emotional conditions. Through personalised therapeutic practices, I began helping people reduce pain, improve mobility, build resilience, and move toward healthier, more fulfilling lives.</p>
        <p>As my own journey unfolded, I realised that years of living with partial sight loss had left me carrying deep emotional wounds, chronic anxiety, and unresolved trauma within my body. This realisation inspired me to study psychotherapy and become a trauma-informed therapist. It gave me the tools to understand not only my own healing journey but also the profound emotional struggles that so many people silently carry.</p>
        <p>Today, my work brings together the wisdom of psychotherapy, Reiki, therapeutic yoga, breathwork, mindfulness, meditation, and other holistic healing modalities. Rather than treating symptoms in isolation, I believe in addressing the whole person&mdash;mind, body, emotions, energy, and spirit.</p>
        <p>My mission is simple yet deeply meaningful: to empower people to heal, transform, and reconnect with their innate capacity for well-being. My own journey taught me that healing is not always about changing our circumstances&mdash;it is about discovering the strength, resilience, and wisdom that already exist within us. It is this philosophy that I bring into every healing session, workshop, and training, creating a compassionate space where lasting transformation can unfold.</p>
        <a class="button button-outline" href="about.html" style="margin-top: 20px; display: inline-block;">Read More</a>
    </section>
    """
    
    # insert after services-section
    content = content.replace('</section>\n\n    <section class="reviews-section reveal" aria-labelledby="reviews-title">', '</section>\n' + new_section + '\n    <section class="reviews-section reveal" aria-labelledby="reviews-title">')

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

def update_css():
    with open('css/style.css', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Increase the size of Session offerings.
    content = content.replace('grid-template-columns: repeat(3, minmax(0, 1fr));', 'grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  font-size: 1.1em;')
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_about()
    update_index()
    update_css()
