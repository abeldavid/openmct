/*global define,describe,it,expect,beforeEach,jasmine,xit*/

define(
    ['../../src/elements/LineHandle'],
    function (LineHandle) {
        "use strict";

        describe("A fixed position drag handle", function () {
            var testElement,
                handle;

            beforeEach(function () {
                testElement = {
                    x: 3,
                    y: 42,
                    x2: 8,
                    y2: 11
                };

                handle = new LineHandle(testElement, 'x', 'y', 'x2', 'y2');
            });

            it("provides x/y grid coordinates for its corner", function () {
                expect(handle.x()).toEqual(3);
                expect(handle.y()).toEqual(42);
            });

            it("changes x and y positions", function () {
                handle.x(30);
                expect(testElement.x).toEqual(30);
                handle.y(40);
                expect(testElement.y).toEqual(40);
            });

            it("disallows values less than zero", function () {
                handle.x(-1);
                handle.y(-400);
                expect(testElement.x).toEqual(0);
                expect(testElement.y).toEqual(0);
            });

            it("ensures that end points remain different", function () {
                handle.x(testElement.x2);
                handle.y(testElement.y2);
                // First change should have been fine, because y was different
                expect(testElement.x).toEqual(testElement.x2);
                // Second change should have been rejected
                expect(testElement.y).not.toEqual(testElement.y2);
            });


        });
    }
);