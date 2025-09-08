Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

The solution is a little bit more intricate that it could be because we need to handle null/empty lines.

So we actually accept the input until it is a “regular number”. Both null (cancel) and empty line also fit that condition, because in numeric form they are 0.

After we stopped, we need to treat null and empty line specially (return null), because converting them to a number would return 0.