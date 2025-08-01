#ifndef Py_INTERNAL_FLOATOBJECT_H
#define Py_INTERNAL_FLOATOBJECT_H
#ifdef __cplusplus
extern "C" {
#endif

#ifndef Py_BUILD_CORE
#  error "this header requires Py_BUILD_CORE define"
#endif


/* runtime lifecycle */

extern void _PyFloat_InitState(PyInterpreterState *);
extern PyStatus _PyFloat_InitTypes(PyInterpreterState *);
extern void _PyFloat_Fini(PyInterpreterState *);
extern void _PyFloat_FiniType(PyInterpreterState *);


/* other API */

#ifndef WITH_FREELISTS
// without freelists
#  define PyFloat_MAXFREELIST 0
#endif

#ifndef PyFloat_MAXFREELIST
#  define PyFloat_MAXFREELIST   100
#endif

struct _Py_float_state {
#if PyFloat_MAXFREELIST > 0
    /* Special free list
       free_list is a singly-linked list of available PyFloatObjects,
       linked via abuse of their ob_type members. */
    int numfree;
    PyFloatObject *free_list;
#endif
};

/* _PyFloat_{Pack,Unpack}{4,8}
 *
 * The struct and pickle (at least) modules need an efficient platform-
 * independent way to store floating-point values as byte strings.
 * The Pack routines produce a string from a C double, and the Unpack
 * routines produce a C double from such a string.  The suffix (4 or 8)
 * specifies the number of bytes in the string.
 *
 * On platforms that appear to use (see _PyFloat_Init()) IEEE-754 formats
 * these functions work by copying bits.  On other platforms, the formats the
 * 4- byte format is identical to the IEEE-754 single precision format, and
 * the 8-byte format to the IEEE-754 double precision format, although the
 * packing of INFs and NaNs (if such things exist on the platform) isn't
 * handled correctly, and attempting to unpack a string containing an IEEE
 * INF or NaN will raise an exception.
 *
 * On non-IEEE platforms with more precision, or larger dynamic range, than
 * 754 supports, not all values can be packed; on non-IEEE platforms with less
 * precision, or smaller dynamic range, not all values can be unpacked.  What
 * happens in such cases is partly accidental (alas).
 */

/* The pack routines write 2, 4 or 8 bytes, starting at p.  le is a bool
 * argument, true if you want the string in little-endian format (exponent
 * last, at p+1, p+3 or p+7), false if you want big-endian format (exponent
 * first, at p).
 * Return value:  0 if all is OK, -1 if error (and an exception is
 * set, most likely OverflowError).
 * There are two problems on non-IEEE platforms:
 * 1):  What this does is undefined if x is a NaN or infinity.
 * 2):  -0.0 and +0.0 produce the same string.
 */
PyAPI_FUNC(int) _PyFloat_Pack2(double x, unsigned char *p, int le);
PyAPI_FUNC(int) _PyFloat_Pack4(double x, unsigned char *p, int le);
PyAPI_FUNC(int) _PyFloat_Pack8(double x, unsigned char *p, int le);

/* The unpack routines read 2, 4 or 8 bytes, starting at p.  le is a bool
 * argument, true if the string is in little-endian format (exponent
 * last, at p+1, p+3 or p+7), false if big-endian (exponent first, at p).
 * Return value:  The unpacked double.  On error, this is -1.0 and
 * PyErr_Occurred() is true (and an exception is set, most likely
 * OverflowError).  Note that on a non-IEEE platform this will refuse
 * to unpack a string that represents a NaN or infinity.
 */
PyAPI_FUNC(double) _PyFloat_Unpack2(const unsigned char *p, int le);
PyAPI_FUNC(double) _PyFloat_Unpack4(const unsigned char *p, int le);
PyAPI_FUNC(double) _PyFloat_Unpack8(const unsigned char *p, int le);


PyAPI_FUNC(void) _PyFloat_DebugMallocStats(FILE* out);


/* Format the object based on the format_spec, as defined in PEP 3101
   (Advanced String Formatting). */
PyAPI_FUNC(int) _PyFloat_FormatAdvancedWriter(
    _PyUnicodeWriter *writer,
    PyObject *obj,
    PyObject *format_spec,
    Py_ssize_t start,
    Py_ssize_t end);

#ifdef __cplusplus
}
#endif
#endif /* !Py_INTERNAL_FLOATOBJECT_H */
