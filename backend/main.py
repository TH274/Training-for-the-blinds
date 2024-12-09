import speech_recognition as sr
import pyttsx3

def init_tts_engine():
    """Initialize the text-to-speech engine."""
    engine = pyttsx3.init()
    engine.setProperty("rate", 150)  # Adjust the speed of speech
    engine.setProperty("volume", 0.9)  # Adjust the volume
    return engine

def recognize_speech(recognizer):
    """Capture and recognize speech from the microphone."""
    with sr.Microphone() as mic:
        recognizer.adjust_for_ambient_noise(mic, duration=0.2)
        print("Listening...")
        audio = recognizer.listen(mic)
        return recognizer.recognize_google(audio).lower()

def main():
    recognizer = sr.Recognizer()
    tts_engine = init_tts_engine()

    print("Speech recognition started. Say 'exit' to quit.")

    while True:
        try:
            text = recognize_speech(recognizer)
            print(f"Recognized: {text}")
            
            # Provide audio feedback
            tts_engine.say(f"You said: {text}")
            tts_engine.runAndWait()

            # Exit condition
            if "exit" in text:
                print("Exiting...")
                tts_engine.say("Goodbye!")
                tts_engine.runAndWait()
                break

        except sr.UnknownValueError:
            print("Sorry, I couldn't understand what you said. Please try again.")
            tts_engine.say("I didn't catch that. Please try again.")
            tts_engine.runAndWait()
            continue
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            tts_engine.say("There was an issue with the speech recognition service.")
            tts_engine.runAndWait()
            break
        except KeyboardInterrupt:
            print("\nInterrupted by user. Exiting...")
            tts_engine.say("Goodbye!")
            tts_engine.runAndWait()
            break

if __name__ == "__main__":
    main()

