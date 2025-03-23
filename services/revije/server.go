package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"google.golang.org/grpc"
	"github.com/ErikLasic/DigitalSubscriptionsSystem/services/revije/proto"
)

type server struct {
	proto.UnimplementedRevijeServiceServer
}

var revijeMap = make(map[string]proto.Revija)

// DodajRevijo - dodajanje revije
func (s *server) DodajRevijo(ctx context.Context, req *proto.Revija) (*proto.Response, error) {
	revijeMap[req.Id] = *req
	return &proto.Response{Message: "Revija uspešno dodana!"}, nil
}

// PridobiRevijo - pridobivanje revije
func (s *server) PridobiRevijo(ctx context.Context, req *proto.RevijaRequest) (*proto.Revija, error) {
	revija, found := revijeMap[req.Id]
	if !found {
		return nil, fmt.Errorf("revija z ID %s ni bila najdena", req.Id)
	}
	return &revija, nil
}

// IzbrisiRevijo - brisanje revije
func (s *server) IzbrisiRevijo(ctx context.Context, req *proto.RevijaRequest) (*proto.Response, error) {
	_, found := revijeMap[req.Id]
	if !found {
		return nil, fmt.Errorf("revija z ID %s ni bila najdena", req.Id)
	}
	delete(revijeMap, req.Id)
	return &proto.Response{Message: "Revija uspešno izbrisana!"}, nil
}

func main() {
	// Nastavitev strežnika
	listen, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Napaka pri odprtju strežnika: %v", err)
	}

	grpcServer := grpc.NewServer()
	proto.RegisterRevijeServiceServer(grpcServer, &server{})

	log.Printf("Strežnik posluša na portu :50051...")
	if err := grpcServer.Serve(listen); err != nil {
		log.Fatalf("Napaka pri zagonu strežnika: %v", err)
	}
}
