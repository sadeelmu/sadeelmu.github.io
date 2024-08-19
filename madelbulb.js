let mandelbulb = [];
let dim = 50;
let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    rotateY(frameCount * 0.01);

    push();
    translate(-50, 0, 0);
    stroke(255);
    strokeWeight(2);

    // Progressive Mandelbulb generation
    if (i < dim) {
        if (j < dim) {
            for (let k = 0; k < dim; k++) {
                let x = map(i, 0, dim, -1, 1);
                let y = map(j, 0, dim, -1, 1);
                let z = map(k, 0, dim, -1, 1);

                let zeta = createVector(0, 0, 0);
                let iterations = 0;
                let n = 8;
                let maxiterations = 10;

                while (true) {
                    let sphericalZeta = spherical(zeta.x, zeta.y, zeta.z);

                    let newx = pow(sphericalZeta.r, n) * sin(sphericalZeta.theta * n) * cos(sphericalZeta.phi * n);
                    let newy = pow(sphericalZeta.r, n) * sin(sphericalZeta.theta * n) * sin(sphericalZeta.phi * n);
                    let newz = pow(sphericalZeta.r, n) * cos(sphericalZeta.theta * n);

                    zeta.x = newx + x;
                    zeta.y = newy + y;
                    zeta.z = newz + z;

                    iterations++;

                    if (sphericalZeta.r > 16) {
                        break;
                    }

                    if (iterations > maxiterations) {
                        mandelbulb.push(createVector(x * 100, y * 100, z * 100));
                        break;
                    }
                }
            }
            j++;
        } else {
            j = 0;
            i++;
        }
    }

    // Render points
    for (let v of mandelbulb) {
        point(v.x, v.y, v.z);
    }

    pop();
}

function spherical(x, y, z) {
    let r = sqrt(x * x + y * y + z * z);
    let theta = atan2(sqrt(x * x + y * y), z);
    let phi = atan2(y, x);
    return { r: r, theta: theta, phi: phi };
}
