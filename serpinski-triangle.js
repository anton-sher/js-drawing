/**
 * Draw an arbitrary rectangular region inside the Serpinski triangle.
 *
 * To achieve this:
 * - draw a complete Serpinski triangle with given vertices and resolution.
 * - to reduce unnecessary computation, find out which sub-triangles intersect with the region, only draw them.
 */

function Point(x, y) {
    return {'x':x, 'y': y};
}

function vectorSub(a, u) {
    return Point(a.x - u.x, a.y - u.y);
}

/**
 * Are points a and b on the same side of the line defined by points u and v?
 * @param a first point.
 * @param b second point.
 * @param u one point of a line.
 * @param v another point of a line.
 */
function sameSide(a, b, u, v) {
    var au = vectorSub(a, u);
    var av = vectorSub(a, v);
    var bu = vectorSub(b, u);
    var bv = vectorSub(b, v);

    // z-coordinate of the vector products must have the same sign to be on same side.
    return (au.x * av.y - av.x * au.y) * (bu.x * bv.y - bv.x * bu.y) > 0;
}


/**
 * Are two shapes defined by arrays of their vertices intersect each other?
 * @param shape1
 * @param shape2
 */
function isIntersecting(shape1, shape2) {
    // Cut a triangle after another off the shape until they intersect.
    // Challenge is to detect whether the vertices are listed clockwise.
    // whether two triangles intersect can be detected using the sameSide function.
}

function assert(msg, condition) {
    if (!condition) {
        throw Error(msg);
    }
}

function runTest() {
    assert("Points should be on same side.", sameSide(Point(0, 1), Point(1, 1), Point(0, 0), Point(1, 0)));
    assert("Points should be on different sides.", !sameSide(Point(0, 1), Point(1, -1), Point(0, 0), Point(1, 0)));
    assert("Points should be on different sides.", !sameSide(Point(0, 1), Point(1, 0), Point(0, 0), Point(1, 1)));
    console.log("Test OK");
}

runTest();
