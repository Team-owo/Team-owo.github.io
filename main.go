package main

import (
	"fmt"
	"log"
	"net/http"
)

func defaultHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
}
func main() {
	log.Println("starting Web Server")
	http.HandleFunc("/", defaultHandler)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe ", err)
	} else {
		fmt.Println("ListenAndServe port(9090)")
	}
}
