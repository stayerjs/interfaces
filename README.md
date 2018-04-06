# @stayer/interfaces

A module that contains common interfaces, types, enums, errors & exceptions used by other modules of the Stayer framework.

## Public API

1) ```Exception``` - an abstract class to extend default Error Node.js class.

2) ```HttpError``` - an abstract Exception representing any HTTP error status.

### Http exceptions:

3) ```BadRequest``` - BadRequest (400) Exception

4) ```Unauthorized``` - Unauthorized (401) Exception

5) ```Forbidden``` - Forbidden (403) Exception

6) ```NotFound``` - NotFound (404) Exception

7) ```MethodNotAllowed``` - MethodNotAllowed (405) Exception

8) ```Conflict``` - Conflict (409) Exception

9) ```InternalServerError``` - InternalServerError (500) Exception

10) ```NotImplemented``` - NotImplemented (501) Exception

More HTTP Exceptions can be added by extending the ```HttpError``` abstract class.
