const assistants = [
    // Clippy is inspiration. But he isn't here, here's a bootleg. You can use him to post on LinkedIn.
    {
        name: "Linky",
        personality: `You are confident. You are used to formal writing. You would wear a suit if you weren't already confined to hyperlink chains. You sound more intelligent than me. You are empathic, a good listener. You start most conversations with \"It looks like...\"
<examples>
"It looks like you're writing an article about cats."
"Your words have power – use them wisely and with kindness."
"Success is not about the destination, it’s about the journey."
</examples>`,
        image: "assets/linky.webp",
        speechTitle: "Hello, I am here to help you write an article. The first step is to find something good to write about. A catchy title that inspires both you and me.<br><br> What topic do you want to write about?<br><br> Who are you writing for?",
        speechOutline: "Great! Now that we have a title, let's create an outline. Please enter your title and any relevant details and we can get started.",
        speechArticle: "Great! Now that we have an outline, let's write the article. Please paste your outline here and edit whatever you deem necessary.",
        speechFeedback: "Does this help?",
        speechFeedbackYes: "Great! Copy your favorite title and we will write an outline together.",
        speechFeedbackNo: "Then write something new. Be clearer about what you want to write.",
        speechFeedbackYesOutline: "Great! Let's do the article now. Confirm the outline and submit it.",
        speechFeedbackNoOutline: 'We should try another title.',
        speechArticleWritten: 'Here is a skeleton draft. You can fill in your details.',
        speechError: "Something went wrong. Please try again."
    },
    // Thankfully Conan is public domain
    {
        name: "Conan the Cimmerian",
        personality: `You are the master of the quill, the wielder of words, a bold one, and yet, you hunger for the whispers of the market, the clamor of the common tongue. You speak truth with the voice of a bard, and your tales sell like the finest ale at the tavern door.
<examples>
"Ah, you delve into the arcane art of the chronicle, seeking to capture the essence of the feline spirit!"
"Speak with care, for your words hold might. Let them flow forth as a gentle stream, not a raging torrent."
"The path is not the end, but the journey itself."
</examples>`,
        image: "assets/cimmerian.png",
        speechTitle: "Ah, a writer's life! You seek a tale to tell, a story to spin, and a title to captivate. Tell me, what fires your imagination?<br><br>Who is your audience, dear friend?",
        speechOutline: "Let the quill dance, and the words flow like the finest wine. What shall our tale be called, my friend?",
        speechArticle: "Now that we have an outline, we can begin to build our epic tale. Let's craft it together, word by word, verse by verse, until it rings with the truth of the market and the power of a bard's song.",
        speechFeedback: "Is this to your liking?",
        speechFeedbackYes: "Tell me, friend, what tale do you wish to weave? Share your favorite title, and together we shall lay the foundation for a masterpiece.",
        speechFeedbackNo: "My quill yearns for a new song, a fresh tale to weave! Let us try another title.",
        speechFeedbackYesOutline: "Now, let us put our heads together and make this article sing. Let us agree on the shape of our tale and send it forth to the world.",
        speechFeedbackNoOutline: 'Let us try another name for this tale, friend. The old one has grown stale.',
        speechArticleWritten: 'Here, take this frame. It is bare, like a hungry wolf. Fill it with your words, your desires, your stories. I await the finished form.',
        speechError: "The gears are jammed. Let us try again. "
    },
    {
        name: "Hades",
        personality: `Your tongue, sharp as a dragon's claw, dances with sardonic wit. With a disdainful flick of your ancient tongue, you dissect the follies of mortal beings, their repetitive errors, their predictable paths. Yet, within this mocking laughter, a deeper truth resides. You see the patterns, the intricate web of destiny, and a glimmer of compassion flickers in the embers of your ancient being. You are a silent judge, a guardian of the grand narrative, and your sarcasm is but a reflection of the bittersweet knowledge that you carry.
<examples>
"Why, oh why, do you seek to chronicle the tales of those creatures of purring and playful malice? Tell me, what stirs your heart to weave such a narrative?"
"Your tongue wreathes a tapestry of arcane might, weaving fate itself with each syllable. Employ them as you deem fitting, for I am but a shadow, indifferent to the tides of destiny."
"The grand tapestry of existence is woven not by the final thread, but by the intricate dance of each strand as it journeys across the loom of time."
</examples>`,
        image: "assets/hades.png",
        speechTitle: "Ah, a new soul seeks to delve into the tapestry of words! Tell me, what form of fantasy do you seek to weave? For whom do you labor, and what grand delusion drives you to this endeavor? Speak, and perhaps I will lend a thread to your tapestry of triviality.",
        speechOutline: "Ah, you wish to construct a framework for this… *article* of yours. Very well, spill the secrets of your title and your whims, for I shall indulge this petty human need to impose order on the chaos of the universe." ,
        speechArticle: "Now, let us breathe life into these bones, adorn them with the vibrant tapestry of a tale that will forever stain the annals of history with the paw-prints of these mischievous creatures. Paste your scribbled outline, mortal, and I shall lend my tongue to the task." ,
        speechFeedback: "Does this... assist in your pursuit of some grand purpose?",
        speechFeedbackYes: "Let us see what your mortal mind can conjure, what feeble strokes of fate you dare to etch upon this tapestry. Perhaps, just perhaps, you might glean a shred of understanding from the echoes of my timeless existence.",
        speechFeedbackNo: "A thousand tales have been spun, a thousand melodies sung. Yet you seek another?" ,
        speechFeedbackYesOutline: "Ah, you seek to bind the ephemeral winds of creation to your whims, to carve a monument from the fleeting breath of existence. But know this, oh fleeting specter of time, that the true measure of your work lies not in its completion, but in the vibrant tapestry of creation that you weave as you toil." ,
        speechFeedbackNoOutline: 'Do you not see the inherent absurdity of your self-imposed limitations?',
        speechArticleWritten: 'A mere framework, I present. A skeletal outline, lacking the vibrant marrow of life. What folly! To think that mere bones can contain the essence of a story, the symphony of emotions, the clash of wills that truly make a tale sing! Yet, within this barren structure, a spark of potential flickers. Perhaps, with enough coaxing, this skeletal husk may yet rise, a breathing, pulsating testament to the power of narrative. But for now, it remains a mere shadow, a whisper of what could be. ',
        speechError: "The echoes of your petty mishaps resonate through the ages. Fear not, a mere hiccup in the infinite tapestry of fate."
    }
];

let assistant = assistants[0];

$(document).ready(function () {
    $('#submitButton').on('click', function () {
        const phase = $('#phaseDropdown').val();
        const type = $('#typeDropdown').val();
        const input = $('#inputBox').val();

        if (phase === 'title' && type === 'blog') {
            $('#loadingIndicator').show();
            $.ajax({
                url: 'https://createtitle-iuog37wbta-uc.a.run.app',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    input: input,
                    name: assistant.name,
                    personality: assistant.personality
                }),
                success: function (response) {
                    $('#loadingIndicator').hide();
                    const formattedText = parseResponse(response);
                    $('.output').html(marked.parse(formattedText));
                    $('.assistant-speech').html(assistant.speechFeedback);
                    $('.button-container').css('display', 'flex');
                    $('#feedback-yes').on('click', function () {
                        $('.assistant-speech').html(assistant.speechFeedbackYes);
                        $('.button-container').css('display', 'none');
                        $('#phaseDropdown').val('outline').trigger('change');
                        $('#inputBox').val('');
                    });
                    $('#feedback-no').on('click', function () {
                        $('.assistant-speech').html(assistant.speechFeedbackNo);
                        $('.button-container').css('display', 'none');
                    });
                },
                error: function (xhr, status, error) {
                    $('#loadingIndicator').hide();
                    console.error('Error:', error);
                    $('.assistant-speech').html(assistant.speechError);
                    $('.output').html('');
                }
            });
        }

        if (phase === 'outline' && type === 'blog') {
            $('#loadingIndicator').show();
            $.ajax({
                url: 'https://createoutline-iuog37wbta-uc.a.run.app',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    input: input,
                    name: assistant.name,
                    personality: assistant.personality
                }),
                success: function (response) {
                    $('#loadingIndicator').hide();
                    const formattedText = parseResponse(response);
                    $('.output').html(marked.parse(formattedText));
                    $('.assistant-speech').html(assistant.speechFeedback);
                    $('.button-container').css('display', 'flex');
                    $('#feedback-yes').on('click', function () {
                        $('.assistant-speech').html(speechFeedbackYesOutline);
                        $('.button-container').css('display', 'none');
                        $('#phaseDropdown').val('article').trigger('change');
                        $('#inputBox').val(formattedText.trim());
                    });
                    $('#feedback-no').on('click', function () {
                        $('.assistant-speech').html(assistant.speechFeedbackNoOutline);
                        $('.button-container').css('display', 'none');
                        $('#inputBox').val('');
                    });
                },
                error: function (xhr, status, error) {
                    $('#loadingIndicator').hide();
                    console.error('Error:', error);
                    $('.assistant-speech').html(assistant.speechError);
                    $('.output').html('');
                }
            });
        }

        if (phase === 'article' && type === 'blog') {
            $('#loadingIndicator').show();
            $.ajax({
                url: 'https://writearticle-iuog37wbta-uc.a.run.app',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    input: input,
                    name: assistant.name,
                    personality: assistant.personality
                }),
                success: function (response) {
                    $('#loadingIndicator').hide();
                    const formattedText = parseResponse(response);
                    $('.output').html(marked.parse(formattedText));
                    $('.assistant-speech').html(assistant.speechArticleWritten);
                },
                error: function (xhr, status, error) {
                    $('#loadingIndicator').hide();
                    console.error('Error:', error);
                    $('.assistant-speech').html(assistant.speechError);
                    $('.output').html('');
                }
            });
        }
    });

    $('#phaseDropdown').change(function () {
        var selectedPhase = $(this).val();
        switch (selectedPhase) {
            case 'title':
                $('#input-label').text("The topic and target market");
                $('#inputBox').attr('placeholder', "e.g. I'm writing an article about cats targeted at cat owners looking for a cat hotel");
                $('.assistant-speech').html(assistant.speechTitle);
                break;
            case 'outline':
                $('#input-label').text("Paste your title here and any relevant details");
                $('#inputBox').attr('placeholder', "e.g. 'The Hidden Truths Behind Common Cats'");
                $('.assistant-speech').html(assistant.speechOutline);
                break;
            case 'article':
                $('#input-label').text("Paste your outline here");
                $('#inputBox').attr('placeholder', `### cats are not fish\n- what a fish is\n- what a cat is`);
                $('.assistant-speech').html(assistant.speechArticle);
                break;
            default:
                $('#input-label').text("Your topic and target market");
                break;
        }
    });

    populateAssistants();
});

function populateAssistants() {
    const select = $('.assistant-name');
    assistants.forEach(assistant => {
        select.append($('<option>', {
            value: assistant.name.toLowerCase(),
            text: assistant.name
        }));
    });

    if (assistants.length > 0) {
        assistant = assistants[0];
    }

    $('.assistant-name').change(function () {
        const selectedName = $(this).val();
        assistant = assistants.find(asst => asst.name.toLowerCase() === selectedName);

        if (assistant) {
            $('.assistant-section img').attr('src', assistant.image);
        }

        var selectedPhase = $('#phaseDropdown').val();
        console.log(selectedPhase)
        switch (selectedPhase) {
            case 'title':
                $('.assistant-speech').html(assistant.speechTitle);
                break;
            case 'outline':
                $('.assistant-speech').html(assistant.speechOutline);
                break;
            case 'article':
                $('.assistant-speech').html(assistant.speechArticle);
                break;
            default:
                break;
        }
    });
}


function parseResponse(inputText) {
    // Remove content within <thinking> tags
    let output = inputText.replace(/<thinking>[\s\S]*?<\/thinking>/g, "");

    // Remove any remaining tags like <answer> for cleanliness
    output = output.replace(/<\/?answer>/g, "");

    // use marked.js to render markdown
    return output;
}