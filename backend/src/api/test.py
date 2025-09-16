import os
from dotenv import load_dotenv

load_dotenv()  # load variables from .env file

import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
print(openai.api_key)  # should print your key
